
import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
import { ITipousuario } from "./tipousuario-interface";

export interface IUsuarioBean {
    nombre: string;
    password: string;
}

export interface IUsuarioBean2Form {
    nombre: FormControl<string>;
    password: FormControl<string>;
}

export interface IUsuario {
    id: number;
    nombre: string;
    apellido1: string;
    apellido2: string;
    login: string;
    password: string;
    email: string;
    tipousuario: ITipousuario;
}

export interface IUsuario2Form {
    id: FormControl<number>;
    nombre: FormControl<string>;
    apellido1: FormControl<string>;
    apellido2: FormControl<string>;
    login: FormControl<string>;
    password: FormControl<string>;
    email: FormControl<string>;
    id_tipousuario: FormControl<number>;
}
export interface IUsuario2Send {
    id: number;
    nombre: string;
    apellido1: string;
    apellido2: string;
    login: string;
    password: string;
    email: string;
    tipousuario: IEntity;


}