import { Component, OnInit } from '@angular/core';

import { IPage } from 'src/app/model/generic';
import { SessionService } from 'src/app/service/session.service';
import { Router } from '@angular/router';

import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-plist-admin',
  templateUrl: './usuario-plist-admin.component.html',
  styleUrls: ['./usuario-plist-admin.component.css']
})
export class UsuarioPlistAdminComponent implements OnInit {
  responseFromServer: IPage<IUsuario>;
  //
  strTermFilter: string = "";
  id_tipousuarioFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oUsuarioService: UsuarioService,
    private oAuthService: SessionService,
    private oSessionService: SessionService,
    private oRouter: Router

    ) {
    this.oAuthService.checkSession().subscribe({
        next: (data: any) => {

        this.getPage();
      },
      error:(error:any) => {
        this.oRouter.navigate(['/login']);
      }
    })

  }

  ngOnInit() {
  }

  getPage() {
    this.oUsuarioService.getUsuarioPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection, this.id_tipousuarioFilter)
    .subscribe({
      next: (resp: IPage<IUsuario>) => {
        this.responseFromServer = resp;
        console.log(resp);
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },

      })
  }


  generateUsuario(){

    this.oUsuarioService.generate().subscribe({
      next: (resp: IUsuario) => {

        this.setPage(this.responseFromServer.totalPages)
        this.getPage();
      }
    });
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.setPage(1);
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByTipousuario(id: number): void {
    this.id_tipousuarioFilter = id;
    this.getPage();
  }


  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }


}
