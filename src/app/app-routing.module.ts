import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { UsuarioPlistAdminComponent } from './component/application/routed/admin/usuario-plist-admin/usuario-plist-admin.component';
import { usuarioViewAdminRoutedComponent } from './component/application/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioNewAdminComponent } from './component/application/routed/admin/usuario-new-admin/usuario-new-admin.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, title: 'Login'},
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminComponent, title: 'Plist usuarios'},
  { path: 'admin/usuario/view/:id', component: usuarioViewAdminRoutedComponent, title: 'Vista usuario'},
  { path: 'admin/usuario/new', component: UsuarioNewAdminComponent, title: 'Nuevo usuario'},
  { path: 'logout', component: LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
