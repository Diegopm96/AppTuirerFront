import { Usuario } from "src/app/feed/interfaces/usuario-interface";

export interface Chat{

  id:              number;
  usuarioEmisor?:  Usuario;
  usuarioReceptor?:Usuario;
}

export interface Mensaje{

  id:           number;
  contenido?:   string;
  chat?:        Chat;
  fecha?:       Date;
  usuario?:     Usuario;
}
