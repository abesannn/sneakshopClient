
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";

import { IPage } from "../model/generic";
import { ITipousuario } from "../model/tipousuario-interface";


@Injectable({
    providedIn: 'root'
  })
  export class TipousuarioService {

    url: string = "";

    constructor( private oHttp : HttpClient ) {
        this.url = `${baseURL}${this.entityURL}`;
    }

    private entityURL: string = "/tipousuario";


    getTipousuarioPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<ITipousuario>>{
      let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (strSortField != "") { //&sort=codigo,[asc|desc]
        if (strOrderDirection != "") {
          params = params.set("sort", strSortField + "," + strOrderDirection);
        } else {
          params = params.set("sort", strSortField);
        }
      }

      return this.oHttp.get<IPage<ITipousuario>>(this.url,{withCredentials:true, params: params});
    }
    getOne(id: number): Observable<ITipousuario> {
        return this.oHttp.get<ITipousuario>(`${baseURL}${this.entityURL}` + "/" + id,{withCredentials:true});
      }
  }