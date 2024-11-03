export class Post {

  titulo: string;
  descripcion: string;
  duracion: string;
  costo: string;
  user_id: number; // Asegúrate de que esta propiedad exista
  
    constructor(titulo: string, descripcion: string, duracion: string, costo: string, postedBy: number) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.duracion = duracion;
      this.costo = costo;
      this.user_id = postedBy;
    }
  }