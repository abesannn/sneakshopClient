import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';

import { UsuarioService } from 'src/app/service/usuario.service';
import { ITipousuario } from 'src/app/model/tipousuario-interface';

import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';




declare let bootstrap: any;

@Component({
  selector: 'app-usuario-new-admin',
  templateUrl: './usuario-new-admin.component.html',
  styleUrls: ['./usuario-new-admin.component.css']
})
export class UsuarioNewAdminComponent implements OnInit {


  id: number = 0;
  oUsuario: IUsuario = null;
  oUsuario2Form: IUsuario2Form;
  oUsuario2Send: IUsuario2Send = null;
  oForm: FormGroup<IUsuario2Form>;

  // MODAL

  mimodal: string = 'miModal';
  miModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  tipousuarioDescription: string = "";
  id_tipousuario: number;

  constructor(
    private oRouter: Router,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
    private oTipousuarioService: TipousuarioService
  ) {

    oAuthService.reload();
    oAuthService.checkSession().subscribe({
      next: (data:any) => {

      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }
    })


  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      apellido1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      apellido2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern]],
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      id_tipousuario: ['', [Validators.required]]
  });
}

  onSubmit() {
    console.log("onSubmit");
    this.oUsuario2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      apellido1: this.oForm.value.apellido1,
      apellido2: this.oForm.value.apellido2,
      email: this.oForm.value.email,
      login: this.oForm.value.login,
      password: this.oForm.value.password,
      tipoUsuario: { id: 2 }
    }
    if (this.oForm.valid) {
      this.oUsuarioService.newOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = "SneakShop";
          this.modalContent = "Usuario " + data + " creado";
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
    this.oRouter.navigate(['admin/usuario/view', data])
  })
  this.miModal.show();
}

updateTipousuarioDescription(id_tipousuario: number) {
  this.oTipousuarioService.getOne(id_tipousuario).subscribe({
    next: (data: ITipousuario) => {
      this.tipousuarioDescription = data.nombre;
      this.id_tipousuario = data.id;
    },
    error: (error: any) => {
      this.tipousuarioDescription = "Tipousuario no encontrado";
      this.oForm.controls['id_tipousuario'].setErrors({ 'incorrect': true });
    }
  })
}

closeTipousuarioModal(id_tipousuario: number) {
  this.oForm.controls['id_tipousuario'].setValue(id_tipousuario);
  this.updateTipousuarioDescription(id_tipousuario);
  this.miModal.hide();
}

openModalFindTipousuario(): void {
  this.miModal = new bootstrap.Modal(document.getElementById("findTipousuario"), {
    keyboard: false
  })
  this.miModal.show();
}
}
