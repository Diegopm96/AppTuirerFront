export interface Usuario {
  id:            number;
  email?:         string;
  nombreUsuario?: string;
  password?:      string;
  fechaRegistro?: Date;
  siguiendo?:   Usuario[]
}
