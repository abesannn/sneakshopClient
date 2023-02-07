import { Component } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
strTipousuario: string = "";

isLogged: boolean = false;
admin: any;
loggedUser: any;

constructor(
  private oSessionService: SessionService,
) {
  
}
}