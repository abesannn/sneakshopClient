import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipousuario } from 'src/app/model/tipousuario-interface';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';


declare let bootstrap: any;

@Component({
  selector: 'app-usuario-edit-admin',
  templateUrl: './usuario-edit-admin.component.html',
  styleUrls: ['./usuario-edit-admin.component.css']
})
export class UsuarioEditAdminComponent implements OnInit {
  id: number = 0;
  oUsuario: IUsuario = null;
  oUsuario2Form: IUsuario2Form = null;
  oUsuario2Send: IUsuario2Send = null;
  oForm: FormGroup<IUsuario2Form>;

  // Modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';

  // Foraneas
  tipousuarioDescription: string = '';
  tipousuarioID: number = 0;
  find = true;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
    private oTipoUsuarioService: TipousuarioService,
  ) {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: ['', [Validators.required]],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      apellido1: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      apellido2: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      login: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      email: [
        '',
        [
          Validators.required,  
        ]
      ],
      id_tipousuario: [
        '',
        [Validators.required],
      ],
    });

    oAuthService.checkSession().subscribe({
      next: (data: any) => {      
      },
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
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;

        console.log(data);

        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [
            data.nombre,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50), 
            ],
          ],
          apellido1: [
            data.apellido1,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          apellido2: [
            data.apellido2,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          login: [
            data.login,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          email: [
            data.email,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          id_tipousuario: [
            data.tipoUsuario.id,
            [Validators.required],
          ],
        });
      },
    });
  }

  onSubmit() {
    console.log('onSubmit');
    
    this.oUsuario2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      apellido1: this.oForm.value.apellido1,
      apellido2: this.oForm.value.apellido2,
      login: this.oForm.value.login,
      password: this.oForm.value.password,
      email: this.oForm.value.email,
      tipoUsuario: {id: this.oForm.value.id_tipousuario},
    };

    if (this.oForm.valid) {
      this.oUsuarioService.updateOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = 'SNEAKSHOP';
          this.modalContent = 'Usuario ' + this.id + ' updated';
          this.oRouter.navigate(['/admin/usuario/view', this.id]);
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
      this.oRouter.navigate(['/admin/usuario/view', this.id]);
  });
    this.myModal.show();
  };

  updateTipousuarioDescription(id_tipousuario: number) {
    this.oTipoUsuarioService.getOne(id_tipousuario).subscribe({
      next: (data: ITipousuario) => {
        this.tipousuarioDescription = data.nombre;
        this.tipousuarioID = data.id;
        this.find = false;
      },
      error: (error: any) => {
        this.tipousuarioDescription = 'Tipousuario not found';
        this.oForm.controls['tipousuario'].setErrors({ incorrect: true });
      },
    });
  }

  closeTipousuarioModal(id_tipousuario: number) {
    this.oForm.controls['id_tipousuario'].setValue(id_tipousuario);
    this.updateTipousuarioDescription(id_tipousuario);
    this.oForm.markAsDirty();
    this.myModal.hide();
  }

  openModalFindTipousuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      //pasar el myModal como parametro
      keyboard: false,
    });
    this.myModal.show();
    console.log(this.myModal);
  }
}


