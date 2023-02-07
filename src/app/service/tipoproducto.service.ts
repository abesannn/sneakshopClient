
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";

import { IPage } from "../model/generic";
import { ITipoproducto, ITipoproducto2Send } from "../model/tipoproducto-interface";


@Injectable({
    providedIn: 'root'
  })
  export class TipoproductoService {

    url: string = "";

    constructor( private oHttp : HttpClient ) {
        this.url = `${baseURL}${this.entityURL}`;
    }

    private entityURL: string = "/tipoproducto";


    getTipoproductoPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<ITipoproducto>>{
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

      return this.oHttp.get<IPage<ITipoproducto>>(this.url,{withCredentials:true, params: params});
    }
      getOne(id: number): Observable<ITipoproducto> {
        return this.oHttp.get<ITipoproducto>(`${baseURL}${this.entityURL}` + "/" + id,{withCredentials:true});
      }

      updateOne(oTipoproducto2Send: ITipoproducto2Send): Observable<number> {
        return this.oHttp.put<number>(this.url, oTipoproducto2Send, { withCredentials: true });
      }

      newOne(oTipoproducto2Send: ITipoproducto2Send): Observable<number> {
        return this.oHttp.post<number>(this.url, oTipoproducto2Send, { withCredentials: true });
      }

      removeOne(id: number): Observable<number> {
        return this.oHttp.delete<number>(this.url + '/' + id, { withCredentials: true });
      }
  }