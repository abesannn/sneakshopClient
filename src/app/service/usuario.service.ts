import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { IPage } from '../model/generic';
import { IUsuario, IUsuario2Send } from '../model/usuario-interface';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private entityURL = '/user';
  url: string = ""

  constructor(
    private oHttp: HttpClient

  ) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getUsuarioPlist(page: number, size: number, termino: string,
    strSortField: string, strOrderDirection: string, id_tipousuario: number): Observable<IPage<IUsuario>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (id_tipousuario != 0) {
        params = params.set("tipousuario", id_tipousuario);
      }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }

    }
    return this.oHttp.get<IPage<IUsuario>>(this.url, { withCredentials: true,params: params });
  }

  getOne(id: number): Observable<IUsuario> {
    return this.oHttp.get<IUsuario>(this.url + "/" + id, { withCredentials: true });
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id, { withCredentials: true });
  }

  updateOne(oUser2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oUser2Send, { withCredentials: true });
  }

  newOne(oUser2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oUser2Send, { withCredentials: true });
  }

  generate(): Observable<IUsuario> {
    return this.oHttp.post<IUsuario>(this.url + "/generate", null, { withCredentials: true });
  }

}



