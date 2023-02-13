import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITipoproducto, ITipoproducto2Form, ITipoproducto2Send } from 'src/app/model/tipoproducto-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

declare let bootstrap: any;

@Component({
  selector: 'app-tipoproducto-new-admin',
  templateUrl: './tipoproducto-new-admin.component.html',
  styleUrls: ['./tipoproducto-new-admin.component.css']
})
export class TipoproductoNewAdminComponent implements OnInit{
  id: number = 0;
  oTipoproducto: ITipoproducto = null;
  oTipoproducto2Form: ITipoproducto2Form = null;
  oTipoproducto2Send: ITipoproducto2Send = null;
  oForm: FormGroup<ITipoproducto2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";



  constructor(
    private oRouter: Router,
    private oTipoproductoService: TipoproductoService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService
  ) {
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
    this.oTipoproducto2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
    }
    if (this.oForm.valid) {
      this.oTipoproductoService.newOne(this.oTipoproducto2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = "SNEAKSHOP";
          this.modalContent = "Tipoproducto " + data + " creado";
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
      this.oRouter.navigate(['/admin/tipoproducto/view', data])
    })
    this.myModal.show()
  }
}
