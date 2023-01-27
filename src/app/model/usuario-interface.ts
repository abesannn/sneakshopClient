
import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";

export interface IUsuarioBean {
    nombre: string;
    password: number;
}

export interface IUsuarioBean2Form {
    nombre: FormControl<string>;
    password: FormControl<string>;
}

export interface IUsuario {
    type: string;
    dni: any;
    tipousuario: any;
    nombre:          string;
    apellido1:        string;
    apellido2:     string;
    login:      string;
    email:       string;
    id:           number;
}

export interface IUsuario2Form {
    id:          FormControl<number>;
    nombre:        FormControl<string>;
    apellido1:     FormControl<string>;
    apellido2:    FormControl<string>;
    email:       FormControl<string>;
    login:    FormControl<string>;
    id_tipousuario:        FormControl<number>;
}
export interface IUsuario2Send {
    id:          number;
    nombre:        string;
    apellido1:     string;
    apellido2:    string;
    email:       string;
    login:    string;
    tipousuario:        IEntity;

}