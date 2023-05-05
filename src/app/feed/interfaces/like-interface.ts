import { Comentario } from "./comentario-interface";
import { Tuit } from "./tuit-interface";
import { Usuario } from "./usuario-interface";

export interface Like {
  id?:        number;
  usuario:   Usuario;
  comentario?: Comentario;
  tuit?:       Tuit;
  flagLike:  boolean;
}
