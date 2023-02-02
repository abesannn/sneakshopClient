import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipousuario } from 'src/app/model/tipousuario-interface';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-tipousuario-view-admin',
  templateUrl: './tipousuario-view-admin.component.html',
  styleUrls: ['./tipousuario-view-admin.component.css']
})
export class TipousuarioViewAdminComponent implements OnInit {

  id: number = 0;
  oTipousuario: ITipousuario = null;


  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oAuthService: SessionService,
    private oRouter: Router,
  ) {
    oAuthService.reload();
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
