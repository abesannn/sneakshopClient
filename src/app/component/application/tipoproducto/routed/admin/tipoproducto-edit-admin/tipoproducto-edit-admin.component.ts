import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipoproducto, ITipoproducto2Form, ITipoproducto2Send } from 'src/app/model/tipoproducto-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

@Component({
  selector: 'app-tipoproducto-edit-admin',
  templateUrl: './tipoproducto-edit-admin.component.html',
  styleUrls: ['./tipoproducto-edit-admin.component.css']
})
export class TipoproductoEditAdminComponent {
  id: number = 0;
  oTipoproducto: ITipoproducto = null;
  oTipoproducto2Form: ITipoproducto2Form = null;
  oTipoproducto2Send: ITipoproducto2Send = null;
  oForm: FormGroup<ITipoproducto2Form>;
  // modal
    mimodal: string = 'miModal';
    myModal: any;
    modalTitle: string = '';
    modalContent: string = '';


  constructor(
    private oRouter: Router,
    private oActivatedRouter: ActivatedRoute,
    private oTipoproductoService: TipoproductoService,
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
    oAuthService.reload();
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
    this.oTipoproductoService.getOne(this.id).subscribe({
      next: (data: ITipoproducto) => {
        this.oTipoproducto = data;

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

    this.oTipoproducto2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
    };

    if (this.oForm.valid) {
      this.oTipoproductoService.updateOne(this.oTipoproducto2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = 'SNEAKSHOP';
          this.modalContent = 'Tipoproducto ' + this.id + ' actualizado';
          this.oRouter.navigate(['/admin/tipoproducto/view', this.id]);
        },
      });
    }
  }
}
