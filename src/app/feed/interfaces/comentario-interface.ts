import { Like } from "./like-interface";

export interface Comentario {
  id?:               number;
  contenido:        string;
  fechaPublicacion?: Date;
  idUsuario:        number;
  idTuitComentado:  number;
  likes?:            Like[];
}
