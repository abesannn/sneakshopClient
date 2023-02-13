import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipoproducto } from 'src/app/model/tipoproducto-interface';
import { SessionService } from 'src/app/service/session.service';
@Component({
  selector: 'app-tipoproducto-view-admin',
  templateUrl: './tipoproducto-view-admin.component.html',
  styleUrls: ['./tipoproducto-view-admin.component.css']
})
export class TipoproductoViewAdminComponent implements OnInit {
  id: number = 0;
  oTipoproducto: ITipoproducto = null;


  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oAuthService: SessionService,
    private oRouter: Router,
  ) {
    oAuthService.checkSession().subscribe({
      next: (data: any) => {

      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }
    })

    this.id = oActivatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
  }
}
