export class Post {

  titulo: string;
  descripcion: string;
  duracion: string;
  costo: string;
  user_id: number; 
  post_id?:number
  
    constructor(titulo: string, descripcion: string, duracion: string, costo: string, postedBy: number, post_id?: number) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.duracion = duracion;
      this.costo = costo;
      this.user_id = postedBy;
      this.post_id =post_id
    }
  }