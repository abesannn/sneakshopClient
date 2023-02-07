import { Component, Input, OnInit } from '@angular/core';
import { ITipoproducto } from 'src/app/model/tipoproducto-interface';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

@Component({
  selector: 'app-tipoproducto-detail-admin-unrouted',
  templateUrl: './tipoproducto-detail-admin-unrouted.component.html',
  styleUrls: ['./tipoproducto-detail-admin-unrouted.component.css']
})
export class TipoproductoDetailAdminUnroutedComponent implements OnInit{

  
  @Input() id: number;
  oTipoproducto: ITipoproducto;

  constructor(
    private oTipoproductoService: TipoproductoService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oTipoproductoService.getOne(this.id).subscribe({
      next: (data: ITipoproducto) => {
        this.oTipoproducto = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}
