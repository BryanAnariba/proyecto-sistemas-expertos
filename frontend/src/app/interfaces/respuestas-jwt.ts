export interface RespuestasJwt {
  datosUsuario: {
    id: number ,
    nombrePersona: string ,
    correoPersona: string ,
    accessToken: string ,
    expiresIn: string
  };
}
