import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from 'src/app/model/producto-interface';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-view-admin',
  templateUrl: './producto-view-admin.component.html',
  styleUrls: ['./producto-view-admin.component.css']
})
export class ProductoViewAdminComponent implements OnInit {

  id: number = 0;
  oProducto: IProducto = null;


  constructor(
    private oActivatedRouter: ActivatedRoute,
    private oProductoService: ProductoService,
  ) {
    this.id = oActivatedRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oProductoService.getOne(this.id).subscribe({
      next: (data: IProducto) => {
        this.oProducto = data;
      }
    })
  }
}
