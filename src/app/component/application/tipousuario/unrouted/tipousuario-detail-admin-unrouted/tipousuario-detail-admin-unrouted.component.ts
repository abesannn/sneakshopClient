import { Component, Input, OnInit } from '@angular/core';
import { ITipousuario } from 'src/app/model/tipousuario-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-detail-admin-unrouted',
  templateUrl: './tipousuario-detail-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-detail-admin-unrouted.component.css']
})
export class TipousuarioDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oTipousuario: ITipousuario;

  constructor(
    private oTipousuarioService: TipousuarioService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oTipousuarioService.getOne(this.id).subscribe({
      next: (data: ITipousuario) => {
        this.oTipousuario = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}
