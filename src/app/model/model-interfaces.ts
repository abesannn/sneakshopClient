import { HttpErrorResponse } from "@angular/common/http";

export interface IEntity {
    id: number,
}

export interface IEntity2Send {
    id: number,
}

export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort2;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    strSortField: string;
    strSortDirection: string;
    strFilter: string;
    strFilteredMessage: string;

    error: HttpErrorResponse;
}

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Sort2 {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface IDate {
    year: number,
    month: number,
    day: number
}

export interface ITime {
    hour: number,
    minute: number
}

export interface IFecha {
    date: IDate,
    time: ITime
}





export interface IReport {
    codigo: string,
    nombre: string,
    fechas: boolean,
    usuario: boolean,
    producto: boolean
}

export interface IPrint {
    cantidad: number;
    fechainicial:string;
    fechafinal:string;
}

export interface IOrder {
    sortField: string;
    sortDirection: string;
}

export interface IResult {
    id: number;    
    strOperation: string;
    strEntity: string;
    error: HttpErrorResponse;
}