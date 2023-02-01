import { FormControl } from "@angular/forms";


export interface IUsuarioBean {
    nombre: string;
    password: string;
}

export interface IUsuarioBean2Form {
    nombre: FormControl<string>;
    password: FormControl<string>;
}

export interface ITipousuario {
    id: number;
    nombre: string;
    usuarios: number;


}


export interface ITipousuario2Form {
    id: FormControl<number>;
    nombre: FormControl<string>;


}
export interface ITipousuario2Send {
    id: number;
    nombre: string


}