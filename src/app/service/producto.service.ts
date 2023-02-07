
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";

import { IPage } from "../model/generic";
import { ITipoproducto, ITipoproducto2Send } from "../model/tipoproducto-interface";
import { IProducto, IProducto2Send } from "../model/producto-interface";


@Injectable({
    providedIn: 'root'
  })
  export class ProductoService {

    url: string = "";

    constructor( private oHttp : HttpClient ) {
        this.url = `${baseURL}${this.entityURL}`;
    }

    private entityURL: string = "/producto";

    getProductoPlist(page: number, size: number, termino: string,
        strSortField: string, strOrderDirection: string, id_tipoproducto: number): Observable<IPage<IProducto>> {
        let params = new HttpParams()
          .set("filter", termino)
          .set("page", page)
          .set("size", size);
          if (id_tipoproducto != 0) {
            params = params.set("tipoproducto", id_tipoproducto);
          }
        if (strSortField != "") { //&sort=codigo,[asc|desc]
          if (strOrderDirection != "") {
            params = params.set("sort", strSortField + "," + strOrderDirection);
          } else {
            params = params.set("sort", strSortField);
          }
    
        }
        return this.oHttp.get<IPage<IProducto>>(this.url, { withCredentials: true,params: params });
      }
    
      getOne(id: number): Observable<IProducto> {
        return this.oHttp.get<IProducto>(`${baseURL}${this.entityURL}` + "/" + id,{withCredentials:true});
      }

      updateOne(oProducto2Send: IProducto2Send): Observable<number> {
        return this.oHttp.put<number>(this.url, oProducto2Send, { withCredentials: true });
      }

      newOne(oProducto2Send: IProducto2Send): Observable<number> {
        return this.oHttp.post<number>(this.url, oProducto2Send, { withCredentials: true });
      }

      removeOne(id: number): Observable<number> {
        return this.oHttp.delete<number>(this.url + '/' + id, { withCredentials: true });
      }

      generate(): Observable<IProducto> {
        return this.oHttp.post<IProducto>(this.url + "/generate", null, { withCredentials: true });
      }


  }