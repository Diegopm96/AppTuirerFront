import { Usuario } from "./usuario-interface";

export interface Tuit {
  id?: number;
  contenido: string;
  fechaPublicacion?: string;
  usuario: Usuario;
}
