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
import { TipousuarioPlistAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin/tipousuario-plist-admin.component';
import { TipousuarioNewAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-new-admin/tipousuario-new-admin.component';
import { TipousuarioRemoveAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-remove-admin/tipousuario-remove-admin.component';
import { TipousuarioViewAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-admin/tipousuario-view-admin.component';
import { TipousuarioEditAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-admin/tipousuario-edit-admin.component';
import { TipoproductoEditAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-edit-admin/tipoproducto-edit-admin.component';
import { TipoproductoNewAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-new-admin/tipoproducto-new-admin.component';
import { TipoproductoPlistAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-plist-admin/tipoproducto-plist-admin.component';
import { TipoproductoRemoveAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-remove-admin/tipoproducto-remove-admin.component';
import { TipoproductoViewAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-view-admin/tipoproducto-view-admin.component';
import { ProductoPlistAdminComponent } from './component/application/producto/routed/admin/producto-plist-admin/producto-plist-admin.component';
import { ProductoNewAdminComponent } from './component/application/producto/routed/admin/producto-new-admin/producto-new-admin.component';
import { ProductoEditAdminComponent } from './component/application/producto/routed/admin/producto-edit-admin/producto-edit-admin.component';
import { ProductoViewAdminComponent } from './component/application/producto/routed/admin/producto-view-admin/producto-view-admin.component';
import { ProductoRemoveAdminComponent } from './component/application/producto/routed/admin/producto-remove-admin/producto-remove-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, title: 'Login'},
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminComponent, title: 'Plist usuarios'},
  { path: 'admin/usuario/view/:id', component: usuarioViewAdminRoutedComponent, title: 'Vista usuario'},
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminComponent, title: 'Eliminar usuario'},
  { path: 'admin/usuario/new', component: UsuarioNewAdminComponent, title: 'Nuevo usuario'},
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminComponent, title: 'Editar usuario'},
  { path: 'logout', component: LogoutComponent},
  { path: 'admin/tipousuario/plist', component: TipousuarioPlistAdminComponent, title: 'Plist tipos de usuario'},
  { path: 'admin/tipousuario/new', component: TipousuarioNewAdminComponent, title: 'Nuevo tipo de usuario'},
  { path: 'admin/tipousuario/remove/:id', component: TipousuarioRemoveAdminComponent, title: 'Eliminar tipo de usuario'},
  { path: 'admin/tipousuario/view/:id', component: TipousuarioViewAdminComponent, title: 'Vista tipo de usuario'},
  { path: 'admin/tipousuario/edit/:id', component: TipousuarioEditAdminComponent, title: 'Editar tipo de usuario'},
  { path: 'admin/tipoproducto/plist', component: TipoproductoPlistAdminComponent, title: 'Plist tipos de producto'},
  { path: 'admin/tipoproducto/new', component: TipoproductoNewAdminComponent, title: 'Nuevo tipo de producto'},
  { path: 'admin/tipoproducto/remove/:id', component: TipoproductoRemoveAdminComponent, title: 'Eliminar tipo de producto'},
  { path: 'admin/tipoproducto/view/:id', component: TipoproductoViewAdminComponent, title: 'Vista tipo de producto'},
  { path: 'admin/tipoproducto/edit/:id', component: TipoproductoEditAdminComponent, title: 'Editar tipo de producto'},
  { path: 'admin/producto/plist', component: ProductoPlistAdminComponent, title: 'Plist productos'},
  { path: 'admin/producto/new', component: ProductoNewAdminComponent, title: 'Nuevo producto'},
  { path: 'admin/producto/edit/:id', component: ProductoEditAdminComponent, title: 'Editar producto'},
  { path: 'admin/producto/view/:id', component: ProductoViewAdminComponent, title: 'View producto'},
  { path: 'admin/producto/remove/:id', component: ProductoRemoveAdminComponent, title: 'Eliminar producto'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
