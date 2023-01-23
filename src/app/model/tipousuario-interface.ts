import { IEntity, IEntity2Send, IPage } from "./model-interfaces";

export interface ITipousuario extends IEntity {
	nombre: string;
	usuarios: number;
}

export interface ITipousuario2Send extends IEntity2Send  {	
	nombre: string;
}

export interface ITipousuarioPage extends IPage<ITipousuario> {
}
