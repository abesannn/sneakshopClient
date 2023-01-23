
import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";

export interface IUsuario {
tipousuario: any;
    nombre:          number;
    apellido1:        string;
    apellido2:     string;
    login:      string;
    email:       string;
    id:           number;
}

export interface IUsuario2Form {
    id:          FormControl<number>;
    name:        FormControl<string>;
    surname:     FormControl<string>;
    lastname:    FormControl<string>;
    email:       FormControl<string>;
    username:    FormControl<string>;
    id_team:        FormControl<number>;
    id_usertype:    FormControl<number>;
}
export interface IUsuario2Send {
    id:          number;
    name:        string;
    surname:     string;
    lastname:    string;
    email:       string;
    username:    string;
    team:        IEntity;
    usertype:    IEntity;
}