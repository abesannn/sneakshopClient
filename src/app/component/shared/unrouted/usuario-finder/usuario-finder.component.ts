import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from 'src/app/model/generic-types-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { SessionService } from 'src/app/service/session.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-finder',
  templateUrl: './usuario-finder.component.html',
  styleUrls: ['./usuario-finder.component.css']
})
export class UsuarioFinderComponent implements OnInit {
  @Output() idSeleccionado = new EventEmitter<number>();
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
    private oRouter: Router
  ) {
    oAuthService.checkSession().subscribe({
      next: (data: any) => {
        this.getPage();  
      },
      error: (err: any) => {
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
        if (this.page > resp.totalPages -1) {
          this.page = resp.totalPages -1;
        }
      },  
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

  setFilterByTipoUsuario(id: number): void {
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

  seleccionarId(id: number) {
    this.idSeleccionado.emit(id);
  }
}