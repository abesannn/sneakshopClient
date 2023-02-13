import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipousuario, ITipousuario2Form, ITipousuario2Send } from 'src/app/model/tipousuario-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-edit-admin',
  templateUrl: './tipousuario-edit-admin.component.html',
  styleUrls: ['./tipousuario-edit-admin.component.css']
})
export class TipousuarioEditAdminComponent implements OnInit {

  id: number = 0;
  oTipousuario: ITipousuario = null;
  oTipousuario2Form: ITipousuario2Form = null;
  oTipousuario2Send: ITipousuario2Send = null;
  oForm: FormGroup<ITipousuario2Form>;
  // modal
    mimodal: string = 'miModal';
    myModal: any;
    modalTitle: string = '';
    modalContent: string = '';


  constructor(
    private oRouter: Router,
    private oActivatedRouter: ActivatedRoute,
    private oTipousuarioService: TipousuarioService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
  ) { 
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: ['', [Validators.required]],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],
    });
    oAuthService.checkSession().subscribe({
      next: (data) => {},
      error: (error) => {
        this.oRouter.navigate(['/login']);
      },
    });
    this.id = this.oActivatedRouter.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oTipousuarioService.getOne(this.id).subscribe({
      next: (data: ITipousuario) => {
        this.oTipousuario = data;

        console.log(data);

        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [
            data.nombre,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(10),
            ],
          ],
        });
      },
    });
  }

  onSubmit() {
    console.log('onSubmit');

    this.oTipousuario2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
    };

    if (this.oForm.valid) {
      this.oTipousuarioService.updateOne(this.oTipousuario2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = 'SNEAKSHOP';
          this.modalContent = 'Tipousuario ' + this.id + ' actualizado';
          this.oRouter.navigate(['/admin/tipousuario/view', this.id]);
        },
      });
    }
  }
}
