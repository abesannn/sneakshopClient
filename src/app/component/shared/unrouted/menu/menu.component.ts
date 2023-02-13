import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/model/usuario-interface';
import { Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{
  strTipousuario: string = '';

  isLogged: boolean = false;
  admin: any;
  loggedUser: any;

  constructor(private oSessionService: SessionService) {}

  ngOnInit() {
    this.oSessionService.on(Events.login).subscribe(
      (data: string) => {
        return this.oSessionService.checkSession().subscribe(
          (data: IUsuario) => {
            this.isLogged = true;
            this.strTipousuario = data.tipoUsuario.nombre;
          }
        );
      });
    this.oSessionService.on(Events.logout).subscribe(
      (data: string) => {
        this.isLogged = false;
        this.strTipousuario = '';
      });

  }
}
