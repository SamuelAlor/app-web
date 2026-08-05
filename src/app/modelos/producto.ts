export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria_id: number;
  categoria_nombre?: string;
  es_favorito?: number;
}

export type NuevoProducto = Omit<Producto, 'id' | 'categoria_nombre' | 'es_favorito'>;