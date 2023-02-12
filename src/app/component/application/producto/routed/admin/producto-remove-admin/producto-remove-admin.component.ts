import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-producto-remove-admin',
  templateUrl: './producto-remove-admin.component.html',
  styleUrls: ['./producto-remove-admin.component.css']
})
export class ProductoRemoveAdminComponent implements OnInit {

  id: number = 0;
  msg: string = '';

  constructor (
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oProductoService: ProductoService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
      
  }

  removeOne() {
    this.oProductoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "producto " + this.id + " eliminado";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }

}
