import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';


declare let bootstrap: any;
@Component({
  selector: 'app-tipoproducto-remove-admin',
  templateUrl: './tipoproducto-remove-admin.component.html',
  styleUrls: ['./tipoproducto-remove-admin.component.css']
})
export class TipoproductoRemoveAdminComponent implements OnInit {
  id: number = 0;
  msg: string = "";


  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oTipoproductoService: TipoproductoService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oTipoproductoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Tipoproducto " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }
}
