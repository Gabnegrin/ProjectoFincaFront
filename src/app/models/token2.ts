import { Propietario } from "./Propietario.model";

export class Token2 {
    token: string | null;
    usuario: Propietario | null;
    constructor(
        token: string | null = null,
        usuario: Propietario | null = null,
      ) {
        this.token = token;
        this.usuario = usuario;
      }
}
