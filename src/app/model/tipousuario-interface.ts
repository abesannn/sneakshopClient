import { FormControl } from "@angular/forms";


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