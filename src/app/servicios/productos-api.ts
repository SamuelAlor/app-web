import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Producto } from '../modelos/producto';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductosApiServicio {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/api/productos`;

  listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url).pipe(catchError((error) => this.manejarError(error)));
  }

  obtenerPorId(id: number): Observable<Producto> {
    return this.http
      .get<Producto>(`${this.url}/${id}`)
      .pipe(catchError((error) => this.manejarError(error)));
  }

  crear(producto: Omit<Producto, 'id'>): Observable<Producto> {
    return this.http
      .post<Producto>(this.url, producto)
      .pipe(catchError((error) => this.manejarError(error)));
  }

  actualizar(id: number, producto: Partial<Producto>): Observable<Producto> {
    return this.http
      .put<Producto>(`${this.url}/${id}`, producto)
      .pipe(catchError((error) => this.manejarError(error)));
  }

  eliminar(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.url}/${id}`)
      .pipe(catchError((error) => this.manejarError(error)));
  }

  private manejarError(error: { error?: { mensaje?: string }; message?: string }) {
    const mensaje = error.error?.mensaje ?? error.message ?? 'No fue posible conectar con la API.';

    return throwError(() => new Error(mensaje));
  }
}
