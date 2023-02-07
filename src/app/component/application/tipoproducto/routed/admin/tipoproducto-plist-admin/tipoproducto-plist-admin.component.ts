import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IPage } from 'src/app/model/generic-types-interface';
import { ITipoproducto, ITipoproducto2Form, ITipoproducto2Send } from 'src/app/model/tipoproducto-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

@Component({
  selector: 'app-tipoproducto-plist-admin',
  templateUrl: './tipoproducto-plist-admin.component.html',
  styleUrls: ['./tipoproducto-plist-admin.component.css']
})
export class TipoproductoPlistAdminComponent implements OnInit {

  responseFromServer: IPage<ITipoproducto>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oTipoproductoService: TipoproductoService,
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

  ngOnInit(): void {
  }


  getPage() {
    this.oTipoproductoService.getTipoproductoPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<ITipoproducto>) => {
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
