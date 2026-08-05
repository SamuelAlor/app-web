import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Producto } from '../modelos/producto';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FavoritosServicio {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/api/favoritos`;

  private readonly favoritosInternos = signal<Producto[]>([]);

  readonly favoritos = this.favoritosInternos.asReadonly();
  readonly total = computed(() => this.favoritosInternos().length);

  cargar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url).pipe(
      tap((favoritos) => this.favoritosInternos.set(favoritos)),
      catchError((error) => this.manejarError(error))
    );
  }

  agregar(producto: Producto): Observable<{ id: number; producto_id: number }> {
    return this.http
      .post<{ id: number; producto_id: number }>(this.url, {
        producto_id: producto.id
      })
      .pipe(
        tap(() => {
          if (!this.existe(producto.id)) {
            this.favoritosInternos.update((favoritos) => [
              ...favoritos,
              {
                ...producto,
                es_favorito: 1
              }
            ]);
          }
        }),
        catchError((error) => this.manejarError(error))
      );
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      tap(() => {
        this.favoritosInternos.update((favoritos) =>
          favoritos.filter((producto) => producto.id !== id)
        );
      }),
      catchError((error) => this.manejarError(error))
    );
  }

  cambiar(producto: Producto): Observable<unknown> {
    return this.existe(producto.id)
      ? this.eliminar(producto.id)
      : this.agregar(producto);
  }

  obtenerTodos() {
    return this.favoritos;
  }

  existe(id: number): boolean {
    return this.favoritosInternos().some((producto) => producto.id === id);
  }

  private manejarError(error: {
    error?: { mensaje?: string };
    message?: string;
  }) {
    const mensaje =
      error.error?.mensaje ??
      error.message ??
      'No fue posible conectar con la API de favoritos.';

    return throwError(() => new Error(mensaje));
  }
}