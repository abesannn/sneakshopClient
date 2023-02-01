import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Location } from '@angular/common';



declare let bootstrap: any;


@Component({
  selector: 'app-usuario-remove-admin',
  templateUrl: './usuario-remove-admin.component.html',
  styleUrls: ['./usuario-remove-admin.component.css']
})

export class UsuarioRemoveAdminComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
  ) { 
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oUsuarioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "usuario " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }
  


}
