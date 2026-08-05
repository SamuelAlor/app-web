export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  total_productos?: number;
}

export type NuevaCategoria = Omit<Categoria, 'id' | 'total_productos'>;