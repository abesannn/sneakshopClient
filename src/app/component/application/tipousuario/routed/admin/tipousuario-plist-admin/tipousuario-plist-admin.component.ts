import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IPage } from 'src/app/model/generic-types-interface';
import { ITipousuario, ITipousuario2Form, ITipousuario2Send } from 'src/app/model/tipousuario-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-plist-admin',
  templateUrl: './tipousuario-plist-admin.component.html',
  styleUrls: ['./tipousuario-plist-admin.component.css']
})
export class TipousuarioPlistAdminComponent implements OnInit {

  responseFromServer: IPage<ITipousuario>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oTipousuarioService: TipousuarioService,
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
    this.oTipousuarioService.getTipousuarioPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<ITipousuario>) => {
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
