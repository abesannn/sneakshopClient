import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from 'src/app/model/producto-interface';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-detail-admin-unrouted',
  templateUrl: './producto-detail-admin-unrouted.component.html',
  styleUrls: ['./producto-detail-admin-unrouted.component.css']
})
export class ProductoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oProducto: IProducto;

  constructor(
    private oProductoService: ProductoService,
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oProductoService.getOne(this.id).subscribe({
      next: (data: IProducto) => {
        this.oProducto = data;
        console.log(data);
      }
    })
  }

  changeID(ev){
    this.id = ev.target.value;
  }
}
