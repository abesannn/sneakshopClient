import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  {

  strOperation: string = "logout"
  oUsuarioSession: IUsuario;

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService,
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) {
  }

  public closeSession() {
    this.oSessionService.logout().subscribe(data => {
      localStorage.clear();
      this.oRouter.navigate(['/', 'home'])
    });
  }
}
