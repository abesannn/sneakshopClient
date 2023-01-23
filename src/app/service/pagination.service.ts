import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class PaginationService {
    constructor() { }

    pagination = (pages: number, page: number): string[] => {
        let botonera: string[] = [];
        let vecindad: number = 2;
        for (let i = 1; i <= pages; i++) {
            if (i == 1) botonera.push(i.toString())
            else if (i >= (page - vecindad) && i <= (page + vecindad))
                botonera.push(i.toString());
            else if (i == pages)
                botonera.push(i.toString());
            else if (i == (page - vecindad - 1) || i == (page + vecindad + 1))
                botonera.push("...");
        }
        return botonera;
    }

}