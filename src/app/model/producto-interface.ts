
import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
import { ITipoproducto } from "./tipoproducto-interface";


export interface IProducto {
    id: number;
    nombre: string;
    precio: string;
    modelo: string;
    talla: string;
    colores: string;
    genero: string;
    tipoproducto: ITipoproducto;
}

export interface IProducto2Form {
    id: FormControl<number>;
    nombre: FormControl<string>;
    precio: FormControl<string>;
    modelo: FormControl<string>;
    talla: FormControl<string>;
    colores: FormControl<string>;
    genero: FormControl<string>;
    tipoproducto: FormControl<number>;
    id_tipoproducto: FormControl<number>;
}
export interface IProducto2Send {
    id: number;
    nombre: string;
    precio: string;
    modelo: string;
    talla: string;
    colores: string;
    genero: string;
    tipoproducto: IEntity;


}