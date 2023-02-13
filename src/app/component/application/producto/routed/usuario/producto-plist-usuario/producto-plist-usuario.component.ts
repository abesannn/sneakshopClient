import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from 'src/app/model/generic-types-interface';
import { IProducto } from 'src/app/model/producto-interface';
import { ProductoService } from 'src/app/service/producto.service';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;
@Component({
  selector: 'app-producto-plist-usuario',
  templateUrl: './producto-plist-usuario.component.html',
  styleUrls: ['./producto-plist-usuario.component.css']
})
export class ProductoPlistUsuarioComponent {
  responseFromServer: IPage<IProducto>;
  //
  strTermFilter: string = "";
  id_tipoProductoFilter: number = 0;
  numberOfElements: number = 7;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  miModal: any;

  selectedId: number = 0;

  constructor(
    private oProductoService: ProductoService,
    private oAuthService: SessionService,
    private oSessionService: SessionService,
    private oRouter: Router

    ) {
      oAuthService.checkSession().subscribe({
        next: (data: any) => {},
        error: (error: any) => {
          this.oRouter.navigate(['/login']);
        },
      });

  }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oProductoService.getProductoPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection, this.id_tipoProductoFilter)
    .subscribe({
      next: (resp: IPage<IProducto>) => {
        console.log(resp)
        this.responseFromServer = resp;
        console.log(resp);
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
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
    this.setPage(1);
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByTipoProducto(id: number): void {
    this.id_tipoProductoFilter = id;
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

  showModal = (id: number) => {
    this.miModal = new bootstrap.Modal(document.getElementById("showInfo"), {
      keyboard: false
    })
    this.selectedId = id;
    console.log(this.selectedId)
    this.miModal.show();
  }

}

