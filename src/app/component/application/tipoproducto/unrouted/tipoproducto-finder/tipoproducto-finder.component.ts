import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from 'src/app/model/generic-types-interface';
import { IProducto } from 'src/app/model/producto-interface';
import { ITipoproducto } from 'src/app/model/tipoproducto-interface';
import { ProductoService } from 'src/app/service/producto.service';
import { SessionService } from 'src/app/service/session.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

@Component({
  selector: 'app-tipoproducto-finder',
  templateUrl: './tipoproducto-finder.component.html',
  styleUrls: ['./tipoproducto-finder.component.css']
})
export class TipoproductoFinderComponent {

  @Output() idSeleccionado = new EventEmitter<number>();
  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IProducto>;
  //
  private pListContent!: ITipoproducto[];
    private pagesCount!: number;
    private numberPage: number = 0;
    sortField: string = "";
    sortDirection: string = "";
    private pageRegister: number = 5;
    private termino: string = "";
    id_tipoproducto: number = 0;

    constructor (
      private oProductoService: ProductoService,
      private oAuthService: SessionService,
      private oRouter: Router,
      private oTipoproductoService: TipoproductoService,
        private oSessionService: SessionService
    ){
      oAuthService.checkSession().subscribe({
        next: (data) => {
          this.getPage();
        },
        error: (error: any) => {
          oRouter.navigate(['/login']);
        }
      })
    }

    ngOnInit() {

    }

    getPage() {
      this.oTipoproductoService.getTipoproductoPlist(this.numberPage, this.pageRegister, this.termino, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp : IPage<ITipoproducto>) => {
          this.pListContent = resp.content;
          this.pagesCount = resp.totalPages;    
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
    }

    getPageNumber(): number {
      return this.numberPage;
    }

    getPlistContent(): ITipoproducto[] {
      return this.pListContent;
    }

    getPagesCount(): number {
      return this.pagesCount;
    }

    setPage(e: number) {
      this.numberPage = e - 1;
      this.getPage();
    }

    getPageRegister(): number {
      return this.pageRegister;
    }

    setRpp(registerPage: number) {
      this.pageRegister = registerPage;
      this.getPage();
    }

    setFilter(termino: string): void {
      this.termino = termino;
      this.numberPage = 0;
      this.getPage();
    }

    filterByTipoproducto(id: number): void {
      this.id_tipoproducto = id;
      this.numberPage = 0;
      this.getPage();
    }

    selectionTipoproducto(id: number): void {
      this.closeEvent.emit(id);
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
