import { Cliente } from "./Cliente.model";

export class Token {
    token: string | null;
    usuario: Cliente | null;
    constructor(
        token: string | null = null,
        usuario: Cliente | null = null,
      ) {
        this.token = token;
        this.usuario = usuario;
      }
}
