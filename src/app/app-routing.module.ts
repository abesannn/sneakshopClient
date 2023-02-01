import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { UsuarioNewAdminComponent } from './component/application/usuario/routed/admin/usuario-new-admin/usuario-new-admin.component';
import { UsuarioPlistAdminComponent } from './component/application/usuario/routed/admin/usuario-plist-admin/usuario-plist-admin.component';
import { usuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioRemoveAdminComponent } from './component/application/usuario/routed/admin/usuario-remove-admin/usuario-remove-admin.component';
import { UsuarioEditAdminComponent } from './component/application/usuario/routed/admin/usuario-edit-admin/usuario-edit-admin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, title: 'Login'},
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminComponent, title: 'Plist usuarios'},
  { path: 'admin/usuario/view/:id', component: usuarioViewAdminRoutedComponent, title: 'Vista usuario'},
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminComponent, title: 'Eliminar usuario'},
  { path: 'admin/usuario/new', component: UsuarioNewAdminComponent, title: 'Nuevo usuario'},
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminComponent, title: 'Editar usuario'},
  { path: 'logout', component: LogoutComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
