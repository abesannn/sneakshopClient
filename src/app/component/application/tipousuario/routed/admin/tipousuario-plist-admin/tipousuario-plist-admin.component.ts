import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITipousuario, ITipousuario2Form, ITipousuario2Send } from 'src/app/model/tipousuario-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-plist-admin',
  templateUrl: './tipousuario-plist-admin.component.html',
  styleUrls: ['./tipousuario-plist-admin.component.css']
})
export class TipousuarioPlistAdminComponent implements OnInit {

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
    private oActivatedRoute: ActivatedRoute,
    private oTipousuarioService: TipousuarioService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService
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
      next: (data: any) => {},
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      },
    });

    this.id = oActivatedRoute.snapshot.params['id'];
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

    onSubmit() {
      console.log('onSubmit');
  
      this.oTipousuario2Send = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre
  
      };
  
      if (this.oForm.valid) {
        this.oTipousuarioService.updateOne(this.oTipousuario2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = 'SNEAKSHOP';
            this.modalContent = 'Tipousuario ' + this.id + ' updated';
            this.oRouter.navigate(['/admin/tipousuario/view', this.id]);
          },
        });
      }
    }
  }
}
