import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Categoria, NuevaCategoria } from '../modelos/categoria';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoriasServicio {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/api/categorias`;

  listar(): Observable<Categoria[]> {
    return this.http
      .get<Categoria[]>(this.url)
      .pipe(catchError((error) => this.manejarError(error)));
  }

  obtenerPorId(id: number): Observable<Categoria> {
    return this.http
      .get<Categoria>(`${this.url}/${id}`)
      .pipe(catchError((error) => this.manejarError(error)));
  }

  crear(categoria: NuevaCategoria): Observable<Categoria> {
    return this.http
      .post<Categoria>(this.url, categoria)
      .pipe(catchError((error) => this.manejarError(error)));
  }

  actualizar(id: number, categoria: NuevaCategoria): Observable<Categoria> {
    return this.http
      .put<Categoria>(`${this.url}/${id}`, categoria)
      .pipe(catchError((error) => this.manejarError(error)));
  }

  eliminar(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.url}/${id}`)
      .pipe(catchError((error) => this.manejarError(error)));
  }

  private manejarError(error: {
    error?: { mensaje?: string };
    message?: string;
  }) {
    const mensaje =
      error.error?.mensaje ??
      error.message ??
      'No fue posible conectar con la API.';

    return throwError(() => new Error(mensaje));
  }
}