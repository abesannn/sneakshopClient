import { FormControl } from "@angular/forms";


export interface ITipoproducto {
    id: number;
    modelo: string;
    productos: number;
}

export interface ITipoproducto2Form {
    id: FormControl<number>;
    nombre: FormControl<string>;

}
export interface ITipoproducto2Send {
    id: number;
    nombre: string
}