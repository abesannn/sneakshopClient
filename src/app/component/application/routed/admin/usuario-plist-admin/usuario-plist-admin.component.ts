import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IPage } from 'src/app/model/generic-types-interface';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-usuario-plist-admin',
  templateUrl: './usuario-plist-admin.component.html',
  styleUrls: ['./usuario-plist-admin.component.css']
})

export class UsuarioPlistAdminRoutedComponent implements OnInit {
generateUsuario() {
throw new Error('Method not implemented.');
}
setFilterByTipousuario(arg0: number) {
throw new Error('Method not implemented.');
}

  responseFromServer: IPage<IUsuario>;
  //
  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  //
  //
  strUserName: string = "";


  constructor(
    protected oRouter: Router,
    private oUsuarioService: UsuarioService,
    private oSessionService: SessionService,
  ) {
    this.responseFromServer = {} as IPage<IUsuario>;
    if (this.oSessionService.isSessionActive()) {
      this.strUserName = this.oSessionService.getUserName();
    } else {
      this.oRouter.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oUsuarioService.getUsuarioPlist(this.page, this.numberOfElements,
      this.strTermFilter,  this.sortField, this.sortDirection, this.id_usertypeFilter)
      .subscribe({
        next: (resp: IPage<IUsuario>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
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
