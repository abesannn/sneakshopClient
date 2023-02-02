import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITipousuario, ITipousuario2Form, ITipousuario2Send } from 'src/app/model/tipousuario-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';


declare let bootstrap: any;
@Component({
  selector: 'app-tipousuario-new-admin',
  templateUrl: './tipousuario-new-admin.component.html',
  styleUrls: ['./tipousuario-new-admin.component.css']
})
export class TipousuarioNewAdminComponent implements OnInit {


  id: number = 0;
  oTipousuario: ITipousuario = null;
  oTipousuario2Form: ITipousuario2Form = null;
  oTipousuario2Send: ITipousuario2Send = null;
  oForm: FormGroup<ITipousuario2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";



  constructor(
    private oRouter: Router,
    private oTipousuarioService: TipousuarioService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService
  ) {
    oAuthService.reload();
    oAuthService.checkSession().subscribe({
      next: (data: any) => {

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
    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oTipousuario2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
    }
    if (this.oForm.valid) {
      this.oTipousuarioService.newOne(this.oTipousuario2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = "SNEAKSHOP";
          this.modalContent = "Tipousuario " + data + " creado";
          this.showModal(data);
        }
      })
    }  
  
  }

  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal),{
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/tipousuario/view', data])
    })
    this.myModal.show()
  }

}
