import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProducto, IProducto2Form, IProducto2Send } from 'src/app/model/producto-interface';
import { ITipoproducto } from 'src/app/model/tipoproducto-interface';
import { ProductoService } from 'src/app/service/producto.service';
import { SessionService } from 'src/app/service/session.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';


declare let bootstrap: any;
@Component({
  selector: 'app-producto-new-admin',
  templateUrl: './producto-new-admin.component.html',
  styleUrls: ['./producto-new-admin.component.css']
})
export class ProductoNewAdminComponent implements OnInit {

  id: number = 0;
  oProducto: IProducto = null;
  oProducto2Form: IProducto2Form = null;
  oProducto2Send: IProducto2Send = null;
  oForm: FormGroup<IProducto2Form>;
  // modal
  miModal: any;
  mimodal: string = 'miModal';
  modalTitle: string = "";
  modalContent: string = "";
  tipoproductoDescription: string = "";
  id_tipoproducto: number;
  id_producto: number;

  constructor (
    private oRouter: Router,
    private oProductoService: ProductoService,
    private oFormBuilder: FormBuilder,  
    private oAuthService: SessionService,
    private oTipoproductoService: TipoproductoService,
  ) {
    
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      precio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      modelo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      talla: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      colores: ['', [Validators.required, Validators.pattern]],
      genero: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      id_tipoproducto: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oProducto2Send = {
      id: this.oForm.value.id,
      precio: this.oForm.value.precio,
      modelo: this.oForm.value.modelo,
      talla: this.oForm.value.talla,
      colores: this.oForm.value.colores,
      genero: this.oForm.value.genero,
      tipoproducto: { id: 2 }
    }
    if (this.oForm.valid) {
      this.oProductoService.newOne(this.oProducto2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = "SneakShop";
          this.modalContent = "Producto " + data + " creado";
          this.showModal(data); 
        }
      })
    }
  }

  showModal = (data) => {
    this.miModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      keyboard: false
    })
    var miModalEl = document.getElementById(this.mimodal);
    miModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['admin/producto/view', data])
    })
    this.miModal.show();
  }

  updateTipoproductoDescription(id_tipoproducto: number) {
    this.oTipoproductoService.getOne(id_tipoproducto).subscribe({
      next: (data: ITipoproducto) => {
        this.tipoproductoDescription = data.nombre;
        this.id_tipoproducto = data.id;
      },
      error: (error: any) => {
        this.tipoproductoDescription = "Tipoproducto no encontrado";
        this.oForm.controls['id_tipoproducto'].setErrors({ 'incorrect': true });
      }
    })
  }

  closeTipoproductoModal(id_tipoproducto: number) {
    this.oForm.controls['id_tipoproducto'].setValue(id_tipoproducto);
    this.updateTipoproductoDescription(id_tipoproducto);
    this.miModal.hide();
  }

  openModalFindTipoproducto(): void {
    this.miModal = new bootstrap.Modal(document.getElementById("findTipoproducto"), {
      keyboard: false
    })
    this.miModal.show();
  }
  
}
