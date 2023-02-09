import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';

import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { TipousuarioFinderComponent } from './component/shared/unrouted/tipousuario-finder/tipousuario-finder.component';
import { UsuarioFinderComponent } from './component/shared/unrouted/usuario-finder/usuario-finder.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { PaginationService } from './service/pagination.service';
import { UsuarioService } from './service/usuario.service';
import { CryptoService } from './service/crypto.service';

import { UsuarioNewAdminComponent } from './component/application/usuario/routed/admin/usuario-new-admin/usuario-new-admin.component';
import { UsuarioPlistAdminComponent } from './component/application/usuario/routed/admin/usuario-plist-admin/usuario-plist-admin.component';
import { usuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
import { UsuarioRemoveAdminComponent } from './component/application/usuario/routed/admin/usuario-remove-admin/usuario-remove-admin.component';
import { UsuarioEditAdminComponent } from './component/application/usuario/routed/admin/usuario-edit-admin/usuario-edit-admin.component';

import { TipousuarioPlistAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin/tipousuario-plist-admin.component';
import { TipousuarioNewAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-new-admin/tipousuario-new-admin.component';
import { TipousuarioDetailAdminUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-detail-admin-unrouted/tipousuario-detail-admin-unrouted.component';
import { TipousuarioRemoveAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-remove-admin/tipousuario-remove-admin.component';
import { TipousuarioViewAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-admin/tipousuario-view-admin.component';
import { TipousuarioEditAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-admin/tipousuario-edit-admin.component';

import { TipoproductoPlistAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-plist-admin/tipoproducto-plist-admin.component';
import { TipoproductoEditAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-edit-admin/tipoproducto-edit-admin.component';
import { TipoproductoNewAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-new-admin/tipoproducto-new-admin.component';
import { TipoproductoRemoveAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-remove-admin/tipoproducto-remove-admin.component';
import { TipoproductoViewAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-view-admin/tipoproducto-view-admin.component';
import { TipoproductoDetailAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-detail-admin-unrouted/tipoproducto-detail-admin-unrouted.component';

//import { ProductoEditAdminComponent } from './component/application/producto/routed/producto-edit-admin/producto-edit-admin.component';
import { ProductoNewAdminComponent } from './component/application/producto/routed/admin/producto-new-admin/producto-new-admin.component';
import { ProductoPlistAdminComponent } from './component/application/producto/routed/admin/producto-plist-admin/producto-plist-admin.component';
import { ProductoRemoveAdminComponent } from './component/application/producto/routed/admin/producto-remove-admin/producto-remove-admin.component';
import { ProductoViewAdminComponent } from './component/application/producto/routed/admin/producto-view-admin/producto-view-admin.component';
import { ProductoDetailAdminUnroutedComponent } from './component/application/producto/unrouted/producto-detail-admin-unrouted/producto-detail-admin-unrouted.component';
import { TipoproductoFinderComponent } from './component/application/tipoproducto/unrouted/tipoproducto-finder/tipoproducto-finder.component';
import { ProductoEditAdminComponent } from './component/application/producto/routed/admin/producto-edit-admin/producto-edit-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    SearchUnroutedComponent,
    TipousuarioFinderComponent,
   
    UsuarioFinderComponent,
    UsuarioPlistAdminComponent,
    usuarioViewAdminRoutedComponent,
    UsuarioDetailAdminUnroutedComponent,
    UsuarioNewAdminComponent,
    UsuarioRemoveAdminComponent,
    UsuarioEditAdminComponent,
   
    TipousuarioPlistAdminComponent,
    TipousuarioNewAdminComponent,
    TipousuarioDetailAdminUnroutedComponent,
    TipousuarioRemoveAdminComponent,
    TipousuarioViewAdminComponent,
    TipousuarioEditAdminComponent,
    
    TipoproductoPlistAdminComponent,
    TipoproductoEditAdminComponent,
    TipoproductoNewAdminComponent,
    TipoproductoRemoveAdminComponent,
    TipoproductoViewAdminComponent,
    TipoproductoDetailAdminUnroutedComponent,
    
    //ProductoEditAdminComponent,
    ProductoNewAdminComponent,
    ProductoPlistAdminComponent,
    ProductoRemoveAdminComponent,
    ProductoViewAdminComponent,
    ProductoDetailAdminUnroutedComponent,
    TipoproductoFinderComponent,
    ProductoEditAdminComponent
    
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    

  ],
  providers: [
    PaginationService,
    UsuarioService,
    CryptoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
