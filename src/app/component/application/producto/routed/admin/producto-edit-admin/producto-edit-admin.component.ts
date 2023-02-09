import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IProducto, IProducto2Form, IProducto2Send } from "src/app/model/producto-interface";
import { ITipoproducto } from "src/app/model/tipoproducto-interface";
import { ProductoService } from "src/app/service/producto.service";
import { SessionService } from "src/app/service/session.service";
import { TipoproductoService } from "src/app/service/tipoproducto.service";



declare let bootstrap: any;

@Component({
  selector: 'app-producto-edit-admin',
  templateUrl: './producto-edit-admin.component.html',
  styleUrls: ['./producto-edit-admin.component.css']
})

export class ProductoEditAdminComponent implements OnInit {
  id: number = 0;
  oProducto: IProducto = null;
  oProducto2Form: IProducto2Form = null;
  oProducto2Send: IProducto2Send = null;
  oForm: FormGroup<IProducto2Form>;

  // Modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';

  // Foraneas
  tipoproductoDescription: string = '';
  tipoProductoID: number = 0;
  find = true;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oProductoService: ProductoService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
    private oTipoProductoService: TipoproductoService,
  ) {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: ['', [Validators.required]],
      precio: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      modelo: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      talla: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      colores: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      genero: [
        '',
        [
          Validators.required,  
        ]
      ],
      id_tipoproducto: [
        '',
        [Validators.required],
      ],
    });
    oAuthService.reload();
    oAuthService.checkSession().subscribe({
      next: (data: any) => {},
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      },
    });

    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne ()  {
    this.oProductoService.getOne(this.id).subscribe({
      next: (data: IProducto) => {
        this.oProducto = data;

        console.log(data);

        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          precio: [
            data.precio,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50), 
            ],
          ],
          modelo: [
            data.modelo,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          talla: [
            data.talla,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          colores: [
            data.colores,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          genero: [
            data.genero,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          id_tipoproducto: [
            data.tipoproducto.id,
            [Validators.required],
          ],
        });
      },
    });
  }

  onSubmit() {
    console.log('onSubmit');
    
    this.oProducto2Send = {
      id: this.oForm.value.id,
      precio: this.oForm.value.precio,
      modelo: this.oForm.value.modelo,
      talla: this.oForm.value.talla,
      colores: this.oForm.value.colores,
      genero: this.oForm.value.genero,
      tipoproducto: {id: this.oForm.value.id_tipoproducto},
    };

    if (this.oForm.valid) {
      this.oProductoService.updateOne(this.oProducto2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = 'SNEAKSHOP';
          this.modalContent = 'Producto ' + this.id + ' updated';
          this.oRouter.navigate(['/admin/producto/view', this.id]);
        },
      });
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      keyboard: false,  
    });
    var myModalEl = document.getElementById(this.mimodal);

    myModalEl.addEventListener('hidden.bs.modal', (event) => {
      this.oRouter.navigate(['/admin/producto/view', this.id]);
  });
    this.myModal.show();
  };

  updateTipoproductoDescription(id_tipoproducto: number) {
    this.oTipoProductoService.getOne(id_tipoproducto).subscribe({
      next: (data: ITipoproducto) => {
        this.tipoproductoDescription = data.nombre;
        this.tipoProductoID = data.id;
        this.find = false;
      },
      error: (error: any) => {
        this.tipoproductoDescription = 'Tipoproducto not found';
        this.oForm.controls['tipoproducto'].setErrors({ incorrect: true });
      },
    });
  }

  closeTipoproductoModal(id_tipoproducto: number) {
    this.oForm.controls['id_tipoproducto'].setValue(id_tipoproducto);
    this.updateTipoproductoDescription(id_tipoproducto);
    this.oForm.markAsDirty();
    this.myModal.hide();
  }

  openModalFindTipoproducto(): void {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      //pasar el myModal como parametro
      keyboard: false,
    });
    this.myModal.show();
    console.log(this.myModal);
  }
}


