import { FormControl } from "@angular/forms";
import { ITipousuario } from "./tipo-usuario.interface";

export interface IUserBean {
    login: string;
    password: string;
}

export interface IUser {
    nombre: string;
    apellido1: string;
    apellido2: string;
    login: string;
    password: string;
    email: string;
    tipousuario: ITipousuario;
}