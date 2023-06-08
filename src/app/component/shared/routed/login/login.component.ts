import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuarioBean2Form } from 'src/app/model/usuario-interface';
import { CryptoService } from 'src/app/service/crypto.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  strOperation: string = "login"
  formularioLogin: UntypedFormGroup;
  oUserSession: IUsuarioBean2Form;

  constructor(
    private FormBuilder: UntypedFormBuilder,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService,
    private oCryptoService: CryptoService,
    public oMetadataService: MetadataService
  ) {
  if (oRoute.snapshot.data['message']) {
    this.oUserSession = this.oRoute.snapshot.data['message'];
    localStorage.setItem("user", JSON.stringify(oRoute.snapshot.data['message']));
    oRouter.navigate(['/home']);
  } else {
    localStorage.clear();
  }
this.formularioLogin = <UntypedFormGroup>this.FormBuilder.group({
  login: ['', [Validators.required, Validators.minLength(4)]],
  password: ['', [Validators.required, Validators.minLength(5)]]
});

}

ngOnInit(): void { }

onSubmit() {
  const loginData = { nombre: this.formularioLogin.get('login')!.value, password: this.oCryptoService.getSHA256(this.formularioLogin.get('password')!.value) };
  console.log("login:onSubmit: ", loginData);
  
  this.oSessionService.login(JSON.stringify(loginData)).subscribe(data => {
    localStorage.setItem("user", JSON.stringify(data.toString()));
    if (data != null) {
      this.oSessionService.emit(new EmitEvent(Events.login, data));
      this.oRouter.navigate(['/','home']);
    } else {
      localStorage.clear();
    }
  });
  return false;
}

loginAdmin() {
  this.formularioLogin.setValue({
    login: "Jose",
    password: "49876"
  })
}

loginUser() {
  this.formularioLogin.setValue({
    login: "user",
    password: "49876"
  })
}


}