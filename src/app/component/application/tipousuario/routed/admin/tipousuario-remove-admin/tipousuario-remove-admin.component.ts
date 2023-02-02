import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TipousuarioService } from 'src/app/service/tipousuario.service';


declare let bootstrap: any;
@Component({
  selector: 'app-tipousuario-remove-admin',
  templateUrl: './tipousuario-remove-admin.component.html',
  styleUrls: ['./tipousuario-remove-admin.component.css']
})
export class TipousuarioRemoveAdminComponent implements OnInit {

  id: number = 0;
  msg: string = "";


  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oTipousuarioService: TipousuarioService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oTipousuarioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Tipousuario " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }

}
