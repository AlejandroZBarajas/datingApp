export class Post {
    post_id: number =0;
    postedBy: number; // Asegúrate de que esta propiedad exista
    titulo: string;
    descripcion: string;
    duracion: string;
    costo: string;
  
    constructor(postedBy: number, titulo: string, descripcion: string, duracion: string, costo: string) {
      this.postedBy = postedBy;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.duracion = duracion;
      this.costo = costo;
    }
  }