import { Like } from "./like-interface";
import { Usuario } from "./usuario-interface";

export interface Comentario {
  id?:               number;
  contenido:        string;
  fechaPublicacion?: Date;
  usuario:        Usuario;
  idTuitComentado:  number;
  likes?:            Like[];
}
