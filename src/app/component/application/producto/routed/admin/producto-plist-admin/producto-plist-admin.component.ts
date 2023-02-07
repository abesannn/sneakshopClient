import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from 'src/app/model/generic-types-interface';
import { IProducto } from 'src/app/model/producto-interface';
import { ITipoproducto } from 'src/app/model/tipoproducto-interface';
import { ProductoService } from 'src/app/service/producto.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-producto-plist-admin',
  templateUrl: './producto-plist-admin.component.html',
  styleUrls: ['./producto-plist-admin.component.css']
})
export class ProductoPlistAdminComponent {
  responseFromServer: IPage<IProducto>;
  //
  strTermFilter: string = "";
  id_tipoProductoFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

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


  generateProducto(){

    this.oProductoService.generate().subscribe({
      next: (resp: IProducto) => {

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


}


