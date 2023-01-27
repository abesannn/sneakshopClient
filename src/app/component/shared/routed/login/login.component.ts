import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario, IUsuario2Form, IUsuarioBean, IUsuarioBean2Form } from 'src/app/model/usuario-interface';
import { CryptoService } from 'src/app/service/crypto.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  strOperation: string = 'login';
  UsuarioBean: IUsuarioBean;
  UsuarioBeanForm: IUsuarioBean2Form;
  formularioLogin: FormGroup<IUsuarioBean2Form>;
  lengthNombre: number = 10;
  minLengthPassword: number = 10;

  constructor(
    private oRouter: Router,
    private oSessionService: SessionService,
    private oCryptoService: CryptoService,
    public oMetadataService: MetadataService,
    private formularioLoginBuilder: FormBuilder
  ) { 
    oSessionService.reload();
    oSessionService.checkSession().subscribe({
      next: (data: any) => {

      },
      error: (error: any) => {
      }
        // this.oRouter.navigate(['/login']);
    })
    this.UsuarioBean = {} as IUsuarioBean;
    this.UsuarioBeanForm = {} as IUsuarioBean2Form;
    this.formularioLogin = {} as FormGroup<IUsuarioBean2Form>;
  }

  ngOnInit (){
    this.formularioLogin = <FormGroup>this.formularioLoginBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern('([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])')]],
      password: ['', [Validators.minLength(this.minLengthPassword)]]
    });
  }
  onSubmit() {
    this.UsuarioBean = {
      nombre: this.formularioLogin.value.nombre as string,
      password: this.oCryptoService.getSHA256(this.formularioLogin.value.password!) as number
    }
    if (this.formularioLogin.valid) {
      this.oSessionService.login(this.UsuarioBean).subscribe({
        next: (data: IUsuario) => {
          localStorage.setItem('User', JSON.stringify(data));
          this.oRouter.navigate(['']);
        },
        error: (error: any) => {
          this.oRouter.navigate(['/login']);
        }
      })
    }
  }

  loginAdmin() {
    let adminBean: IUsuarioBean = {
      nombre : 'admin',
      password : 49876
  }
  this.oSessionService.login(adminBean).subscribe({
    next: (data: IUsuario) => {
      localStorage.setItem('Usuario', JSON.stringify(data));
      this.oRouter.navigate(['']);
    },
    error: (error: any) => {
      console.log(error);
    }
  })
}

    loginUsuario() {
      let adminBean: IUsuarioBean = {
        nombre : 'usuario',
        password: 49876
      }
      this.oSessionService.login(adminBean).subscribe({
        next: (data: IUsuario) => {
          localStorage.setItem('Usuario', JSON.stringify(data));
          this.oRouter.navigate(['']);
        },
        error: (error: any) => {
          console.log(error);
        }
      })
    }

}

