import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class MetadataService {

  constructor() { }

  // TODO: crear tipo entity, tipo operation y tipo system

  //pruebas:



  public getIcon(strIcon: string): string {
    switch (true) {
      case strIcon == "system": return "fas fa-shopping-basket";
      //-- entities  
      case strIcon == "usuario": return "fas fa-user";
      case strIcon == "tipousuario": return "fas fa-user-tag";
      case strIcon == "producto": return "fas fa-gift";
      case strIcon == "tipoproducto": return "fas fa-tag";
      case strIcon == "compra": return "fas fa-cash-register";
      case strIcon == "factura": return "fas fa-file-invoice-dollar";
      case strIcon == "carrito": return "fas fa-shopping-cart";
      case strIcon == "informe": return "fas fa-file-alt";
      //-- operations
      case strIcon == "view": return "fas fa-eye";
      case strIcon == "plist": return "fas fa-list";
      case strIcon == "selection": return "fas fa-bullseye";
      case strIcon == "list": return "fas fa-stream";
      case strIcon == "remove": return "fas fa-trash";
      case strIcon == "new": return "fas fa-plus";
      case strIcon == "edit": return "fas fa-pen";
      case strIcon == "random": return "fas fa-random";
      //-- fields
      case strIcon == "id": return "fas fa-hashtag";
      //
      case strIcon == "dni": return "fas fa-address-card";
      case strIcon == "nombre": return "fas fa-signature";
      case strIcon == "apellido1": return "fas fa-signature";
      case strIcon == "apellido2": return "fas fa-signature";
      case strIcon == "email": return "fas fa-at";
      case strIcon == "login": return "fas fa-user";
      case strIcon == "password": return "fas fa-key";
      case strIcon == "descuento": return "fas fa-percentage";
      case strIcon == "token": return "fas fa-barcode";
      case strIcon == "validado": return "fas fa-user-check";
      case strIcon == "activo": return "fas fa-flag-checkered";
      //
      case strIcon == "descripcion": return "fas fa-signature";
      //
      case strIcon == "codigo": return "fas fa-barcode";
      case strIcon == "precio": return "fas fa-euro-sign";
      case strIcon == "existencias": return "fas fa-boxes";
      case strIcon == "imagen": return "fas fa-image";
      //
      case strIcon == "fecha": return "fas fa-calendar";
      case strIcon == "iva": return "fas fa-percentage";
      case strIcon == "pagado": return "fas fa-check";
      //
      case strIcon == "cantidad": return "fas fa-sort-numeric-up";
      case strIcon == "precio": return "fas fa-euro-sign";
      case strIcon == "descuento_usuario": return "fas fa-percentage";
      case strIcon == "descuento_producto": return "fas fa-percentage";
      // SYSTEM
      case strIcon == "date": return "far fa-calendar-alt";
      case strIcon == "time": return "far fa-clock"; //cambiar a date
      case strIcon == "quantity": return "fas fa-mountain"; //amount
      case strIcon == "euro": return "fas fa-euro-sign";
      case strIcon == "dollar": return "fas fa-dollar-sign";
      case strIcon == "price": return "fas fa-euro-sign"; //price
      case strIcon == "percent": return "fas fa-percent"; //percent      
      case strIcon == "code": return "fas fa-barcode"; //code
      case strIcon == "image": return "fas fa-camera"; //image      
      case strIcon == "print": return "fas fa-print";
      case strIcon == "dashboard": return "fas fa-tachometer-alt";
      case strIcon == "report": return "fas fa-file-alt"; //cambiar a report
      case strIcon.startsWith("report"): return "fas fa-copy";
      case strIcon == "home": return "fas fa-home";
      case strIcon == "login": return "fas fa-sign-in-alt";
      case strIcon == "logout": return "fas fa-sign-out-alt";
      case strIcon == "users": return "fas fa-user-friends";
      case strIcon == "getin": return "fas fa-sign-in";
      case strIcon == "logout": return "fas fa-sign-in";
      case strIcon == "reset": return "fas fa-brush";
      case strIcon == "filter": return "fas fa-filter";
      case strIcon == "search": return "fas fa-search";
      case strIcon == "rpp": return "fas fa-file-alt";
      case strIcon == "selection": return "fas fa-bullseye";
      case strIcon == "ok": return "fas fa-check-square";
      case strIcon == "return": return "fas fa-arrow-circle-left";
      case strIcon == "random": return "fas fa-random";
      case strIcon == "save": return "fas fa-floppy-disk";
      case strIcon == "accept": return "fas fa-check-circle";
      case strIcon == "reject": return "fas fa-times-circle";
      case strIcon == "orderUp": return "fas fa-arrow-up";
      case strIcon == "orderDown": return "fas fa-arrow-down";
      case strIcon == "github": return "fab fa-github";
      case strIcon == "github2": return "fab fa-github-alt";
      case strIcon == "amount": return "fas fa-mountain";
      case strIcon == "true": return "fas fa-check";
      case strIcon == "false": return "fas fa-times";
      case strIcon == "yes": return "fas fa-check";
      case strIcon == "no": return "fas fa-times";
      case strIcon == "selection": return "fas fa-bullseye";
      //ptes
      case strIcon == "tools": return "fas fa-tools";
      case strIcon == "acciones": return "fas fa-tools";
      case strIcon == "porcentaje": return "fas fa-percent"; //percent
      case strIcon == "activado": return "fas fa-flag-checkered";
      case strIcon == "total": return "fas fa-euro-sign";
      case strIcon == "comment": return "fas fa-comment";
      case strIcon == "creation": return "fas fa-clock";
      case strIcon == "lastedition": return "fas fa-clock";
      //
      default: return 'fas fa-question';
    }
  }

  public getName(str: string): string {
    switch (true) {
      // refactoring
      case str == "cart item edition": return "Edición de línea de carrito";
      case str == "user edition": return "Edición de usuario";
      case str == "purchase edition": return "Edición de compra";
      case str == "invoice edition": return "Edición de factura";
      case str == "product edition": return "Edición de producto";
      case str == "product type edition": return "Edición de tipo de producto";
      case str == "user type edition": return "Edición de tipo de usuario";
      //--



      case str == "new cart item": return "Nueva línea de carrito";
      case str == "cart item removal": return "Borrado de línea de carrito";
      case str == "cart item view": return "Vista de línea de carrito";
      //--
      case str == "cart items list": return "Listado de líneas de carrito";
      case str == "users list": return "Listado de usuarios";
      case str == "purchases list": return "Listado de compras";
      case str == "invoices list": return "Listado de facturas";
      case str == "products list": return "Listado de productos";
      case str == "product types list": return "Listado de tipos de producto";
      case str == "user types list": return "Listado de tipos de usuario";
      case str == "comments list": return "Listado de comentarios de los productos";



      case str == "id": return "Id";
      case str == "ID": return "ID";
      case str == "amount": return "Cantidad";
      case str == "price": return "Precio";
      case str == "product": return "Producto";
      case str == "user": return "Usuario";
      case str == "invalid amount": return "La cantidad introducida no es válida";
      case str == "invalid price": return "El precio introducido no es válido";
      case str == "please select a product type": return "Por favor, seleccione un tipo de producto";
      case str == "please select a product": return "Por favor, seleccione un producto";
      case str == "please select a user": return "Por favor, seleccione un usuario";
      case str == "save cart item": return "Guardar la línea de carrito";
      case str == "item cart filter": return "Filtro de línea de carrito";
      case str == "cart items": return "líneas de carrito";
      case str == "actions": return "Acciones";
      case str == "products in cart": return "Productos DISTINTOS en el carrito";
      case str == "total in cart": return "Total en el carrito";
      case str == "vat included": return "IVA incluido";
      case str == "search for a product in cart": return "Busca un producto en tu carrito";
      case str == "unit price": return "Precio unitario";
      case str == "discounts": return "Descuentos";
      case str == "vat": return "IVA";
      case str == "total": return "Total";
      case str == "code": return "Código";
      case str == "product discount": return "Descuento del producto";
      case str == "client discount": return "Descuento del cliente";

      case str == "cart products": return "productos en carrito";

      // GOTOS
      case str == "go to carrito list": return "Ir al listado de productos en carritos";
      case str == "go to carrito view": return "Ir a la vista de producto en carrito";
      case str == "go to carrito edition": return "Ir a la edición de producto en carrito";
      case str == "go to carrito creation": return "Ir a la creación de producto en carrito";
      case str == "go to carrito removal": return "Ir al borrado de producto en carrito";

      case str == "go to compra list": return "Ir al listado de compras";
      case str == "go to compra view": return "Ir a la vista de compra";
      case str == "go to compra edition": return "Ir a la edición de compra";
      case str == "go to compra creation": return "Ir a la creación de compra";
      case str == "go to compra removal": return "Ir al borrado de compra";

      case str == "go to factura list": return "Ir al listado de facturas";
      case str == "go to factura view": return "Ir a la vista de factura";
      case str == "go to factura edition": return "Ir a la edición de factura";
      case str == "go to factura creation": return "Ir a la creación de factura";
      case str == "go to factura removal": return "Ir al borrado de factura";

      case str == "go to producto list": return "Ir al listado de productos";
      case str == "go to producto view": return "Ir a la vista de producto";
      case str == "go to producto edition": return "Ir a la edición de producto";
      case str == "go to producto creation": return "Ir a la creación de producto";
      case str == "go to producto removal": return "Ir al borrado de producto";

      case str == "go to usuario list": return "Ir al listado de usuarios";
      case str == "go to usuario view": return "Ir a la vista de usuario";
      case str == "go to usuario edition": return "Ir a la edición de usuario";
      case str == "go to usuario creation": return "Ir a la creación de usuario";
      case str == "go to usuario removal": return "Ir al borrado de usuario";

      case str == "go to tipoproducto list": return "Ir al listado de productos";
      case str == "go to tipoproducto view": return "Ir a la vista de producto";
      case str == "go to tipoproducto edition": return "Ir a la edición de producto";
      case str == "go to tipoproducto creation": return "Ir a la creación de producto";
      case str == "go to tipoproducto removal": return "Ir al borrado de producto";

      case str == "go to tipousuario list": return "Ir al listado de tipos de usuario";
      case str == "go to tipousuario view": return "Ir a la vista de tipo de usuario";
      case str == "go to tipousuario edition": return "Ir a la edición de tipo de usuario";
      case str == "go to tipousuario creation": return "Ir a la creación de tipo de usuario";
      case str == "go to tipousuario removal": return "Ir al borrado de tipo de usuario";

      case str == "go to comment list": return "Ir al listado de comentarios";
      case str == "go to comment view": return "Ir a la vista de comentario";
      case str == "go to comment edition": return "Ir a la edición de comentario";
      case str == "go to comment creation": return "Ir a la creación de comentario";
      case str == "go to comment removal": return "Ir al borrado de comentarios";
      // Validation de borrados
      case str == 'are you sure you want to remove the carrito': return "¿Está vd. seguro de que quiere borrar el producto en carrito?";
      case str == 'are you sure you want to remove the compra': return "¿Está vd. seguro de que quiere borrar la compra?";
      case str == 'are you sure you want to remove the factura': return "¿Está vd. seguro de que quiere borrar la factura?";
      case str == 'are you sure you want to remove the producto': return "¿Está vd. seguro de que quiere borrar el producto?";
      case str == 'are you sure you want to remove the usuario': return "¿Está vd. seguro de que quiere borrar el usuario?";
      case str == 'are you sure you want to remove the tipoproducto': return "¿Está vd. seguro de que quiere borrar el tipo de producto?";
      case str == 'are you sure you want to remove the tipousuario': return "¿Está vd. seguro de que quiere borrar el tipo de usuario?";
      case str == 'are you sure you want to remove the comment': return "¿Está vd. seguro de que quiere borrar el comentario?";

      case str == 'are you sure you want to end session': return "¿Está vd. seguro de que quiere salir de la sesión?";
      case str == 'end session': return "Salir de la sesión";
      case str == 'go to home page': return "Ir a la página principal";
      case str == 'return': return "Volver";

      case str == "date": return "Fecha";
      case str == "user discount": return "Descuento usuario";
      case str == "descuento producto": return "Descuento producto";
      case str == "product id": return "Id producto";
      case str == "invoice id": return "Id factura";
      case str == "user desc": return "Desc. usuario";
      case str == "product desc": return "Desc. producto";
      case str == "product": return "Producto";
      case str == "invoice": return "Factura";
      case str == "VAT": return "IVA";
      case str == "user": return "Usuario";
      case str == "paid": return "Pagado";
      case str == "paid?": return "¿Pagado?";
      case str == "purchases": return "Compras";
      case str == "code": return "Código";
      case str == "discount of": return "Descuento de";
      case str == "only": return "Sólo";
      case str == "availables": return "Disponibles";
      case str == "unit": return "Unidad";
      case str == "you have": return "Tienes";
      case str == "in the cart": return "En el carrito";


      // errores genericos de campos
      case str == "mandatory": return "El campo es obligatorio.";
      case str == "invalid": return "Los valores del campo no son válidos, debe introducir los datos correctamente";
      case str == "tooShort": return "El valor introducido es demasiado corto";
      case str == "tooLong": return "El valor introducido es demasiado largo";
      case str == "you must set a valid date": return "Se debe introducir una fecha correcta";
      case str == "you must set a valid vat": return "Se debe introducir una iva correcto";
      case str == "you must set a valid name": return "Se debe introducir un nombre correcto";
      case str == "you must set a valid surname": return "Se debe introducir un primer apellido correcto";
      case str == "you must set a valid lastname": return "Se debe introducir un segundo apellido correcto";
      case str == "you must set a valid login": return "Se debe introducir un login correcto";
      case str == "you must set a valid email": return "Se debe introducir un email correcto";
      case str == "you must set a valid DNI": return "Se debe introducir un DNI correcto";
      //--
      case str == "select a cart item": return "Seleccione una línea de carrito";
      case str == "select a purchase": return "Seleccione una compra";
      case str == "select an invoice": return "Seleccione una factura";
      case str == "select a product": return "Seleccione un producto";
      case str == "select a user": return "Seleccione un usuario";
      case str == "select a user type": return "Seleccione un tipo de usuario";
      case str == "select a product type": return "Seleccione un tipo de producto";
      //--
      case str == "select a carrito": return "Seleccione una línea de carrito";
      case str == "select a compra": return "Seleccione una compra";
      case str == "select a factura": return "Seleccione una factura";
      case str == "select a producto": return "Seleccione un producto";
      case str == "select a usuario": return "Seleccione un usuario";
      case str == "select a tipousuario": return "Seleccione un tipo de usuario";
      case str == "select a tipoproducto": return "Seleccione un tipo de producto";
      //--
      case str == "image": return "Imagen";
      case str == "discount": return "Descuento";
      case str == "product type": return "Tipo de producto";
      case str == "stock": return "Existencias";
      case str == "actions": return "Acciones";

      case str == "": return "";






      // entidades
      case str == "system": return "Sistema";
      case str == "asystem": return "Un sistema";
      case str == "systems": return "Sistemas";
      case str == "thesystem": return "El sistema";
      case str == "thesystems": return "Los sistemas";
      //
      case str == "producto": return "Producto";
      case str == "aproducto": return "Un producto";
      case str == "productos": return "Productos";
      case str == "theproducto": return "El producto";
      case str == "theproductos": return "Los productos";
      //
      case str == "tipoproducto": return "Tipo de producto";
      case str == "atipoproducto": return "Un tipo de producto";
      case str == "tipoproductos": return "Tipos de producto";
      case str == "thetipoproducto": return "El tipo de producto";
      case str == "thetipoproductos": return "Los tipos de producto";
      //
      case str == "usuario": return "Usuario";
      case str == "ausuario": return "Un usuario";
      case str == "usuarios": return "Usuarios";
      case str == "theusuario": return "El usuario";
      case str == "theusuarios": return "Los usuarios";
      //
      case str == "tipousuario": return "Tipo de usuario";
      case str == "atipousuario": return "Un tipo de usuario";
      case str == "tipousuarios": return "Tipos de usuario";
      case str == "thetipousuario": return "El tipo de usuario";
      case str == "thetipousuarios": return "Los tipos de usuario";
      //
      case str == "compra": return "Compra";
      case str == "acompra": return "Una compra";
      case str == "compras": return "Compras";
      case str == "thecompra": return "La compra";
      case str == "thecompras": return "Las compras";
      //
      case str == "factura": return "Factura";
      case str == "afactura": return "Una factura";
      case str == "facturas": return "Facturas";
      case str == "thefactura": return "La factura";
      case str == "thefacturas": return "Las facturas";
      //
      case str == "carrito": return "Carrito";
      case str == "acarrito": return "Un Carrito";
      case str == "carritos": return "Carritos";
      case str == "thecarrito": return "El carrito";
      case str == "thecarritos": return "Los carritos";
      //
      case str == "comment": return "Comentario";
      case str == "acomment": return "Un Comentario";
      case str == "comments": return "Comentarios";
      case str == "thecomment": return "El comentario";
      case str == "thecomments": return "Los comentarios";

      //operaciones
      case str == "view": return "Ver";
      case str == "viewof": return "Vista";
      case str == "goview": return "Ir a la vista";
      case str == "views": return "Vistas";
      case str == "viewing": return "Viendo";
      case str == "theview": return "La vista";
      case str == "theviews": return "Las vistas";
      //
      case str == "plist": return "Listado";
      case str == "plistof": return "Listado";
      case str == "goplist": return "Ir al listado";
      case str == "plists": return "Listados";
      case str == "plisting": return "Listando";
      case str == "theplist": return "El listado";
      case str == "theplists": return "Los listados";
      //
      case str == "selection": return "Selección";
      case str == "selectionof": return "Selección";
      case str == "goselection": return "Ir a la selección";
      case str == "selections": return "Selecciones";
      case str == "selecting": return "Seleccionando";
      case str == "theselection": return "La selección";
      case str == "theselections": return "Las selecciones";
      //
      case str == "list": return "Listado";
      case str == "listof": return "Listado";
      case str == "golist": return "Ir al listado";
      case str == "lists": return "Listados";
      case str == "listing": return "Listando";
      case str == "thelist": return "El listado";
      case str == "thelists": return "Los listados";
      //
      case str == "remove": return "Eliminar";
      case str == "removeof": return "Borrado";
      case str == "goremove": return "Ir a la eliminación";
      case str == "removes": return "Borrados";
      case str == "removing": return "Eliminando";
      case str == "theremove": return "El borrado";
      case str == "theremoves": return "Los borrados";
      //
      case str == "new": return "Crear";
      case str == "newof": return "Alta";
      case str == "gonew": return "Ir a la creación";
      case str == "news": return "Altas";
      case str == "newing": return "Creando";
      case str == "thenew": return "El alta";
      case str == "thenews": return "Las altas";
      //
      case str == "edit": return "Modificar";
      case str == "editof": return "Edición";
      case str == "goedit": return "Ir a la edición";
      case str == "edits": return "Ediciones";
      case str == "editing": return "Editando";
      case str == "theedit": return "La edición";
      case str == "theedits": return "Las ediciones";
      //
      case str == "random": return "Aleatorio";
      case str == "random": return "Creación de registros aleatorios";
      case str == "gorandom": return "Ir a la creación aleatoria";
      case str == "randoms": return "Aleatorios";
      case str == "randoming": return "Creando registros aleatorios";
      case str == "therandom": return "La creación de registros aleatorios";
      case str == "therandoms": return "Las creaciones de registros aleatorios";
      //
      case str == "print": return "Imprimir";
      case str == "printof": return "Impresión";
      case str == "goprint": return "Ir a la impresión";
      case str == "prints": return "Impresiones";
      case str == "printing": return "Imprimiendo";
      case str == "theprint": return "La impresión";
      case str == "theprints": return "Las impresiones";
      //
      case str == "report": return "Informe";
      case str == "reportof": return "Informes";
      case str == "goreport": return "Ir al informe";
      case str == "reports": return "Informes";
      case str == "reporting": return "Generando el informe";
      case str == "thereport": return "El informe";
      case str == "ofthereport": return "Del informe";
      case str == "thereports": return "Los informes";
      case str == "ofthereports": return "De los informes";
      // campos usuario
      case str == "dni": return "DNI";
      case str == "nombre": return "Nombre";
      case str == "apellido1": return "Primer apellido";
      case str == "apellido2": return "Segundo apellido";
      case str == "login": return "Login";
      case str == "password": return "Contraseña";
      case str == "email": return "Email";
      case str == "invalidEmail": return "El email no es válido, debe introducir un email válido";
      case str == "descuento": return "Descuento";
      case str == "currentDescuento": return "Descuento actual";
      case str == "token": return "Token";
      case str == "validado": return "Validado";
      case str == "activo": return "Activo";
      // campos producto
      case str == "codigo": return "Código";
      case str == "existencias": return "Existencias";
      case str == "precio": return "Precio";
      case str == "unitPrice": return "Precio unitario";
      case str == "invalidPrecio": return "Se debe introducir un número entre 1 y 100000. Se pueden poner dos decimales.";
      // campos compra
      case str == "cantidad": return "Cantidad";
      case str == "invalidCantidad": return "Se debe introducir la cantidad: un número entero entre 1 y 10000.";
      case str == "fecha": return "Fecha";
      case str == "invalidFecha": return "La fecha no es válida, debe introducir una fecha válida";
      case str == "descuentoCliente": return "Descuento del cliente";
      case str == "descuentoUsuario": return "Descuento del usuario";
      case str == "descuentoProducto": return "Descuento del producto";
      case str == "invalidDescuento": return "Se debe introducir un descuento válido: un número entero entre 0 y 100.";
      case str == "discounts": return "Descuentos";
      // campos factura
      case str == "iva": return "IVA";
      case str == "vatIncluded": return "con IVA";
      case str == "pagado": return "Pagado";
      // campos comentario
      case str == "comment": return "Commentario";
      case str == "creation": return "Creación";
      case str == "lastedition": return "Última modificación";
      //      
      // sistema      
      case str == "id": return "ID";
      case str == "action": return "Acción";
      case str == "actions": return "Acciones";
      case str == "order": return "Orden";
      case str == "ascending": return "Ascendente";
      case str == "descending": return "Descendente";
      case str == "home": return "Página principal";
      case str == "profile": return "Perfil";
      case str == "userprofile": return "Detalles del usuario en sesión";
      case str == "random": return "Generación aleatoria de registros";
      case str == "actions": return "Acciones";
      case str == "return": return "Volver";
      case str == "home": return "Ir a la página principal";
      case str == "github": return "Github";
      case str == "save": return "Guardar";
      case str == "selection": return "Seleccionar";
      case str == "image": return "Imagen";
      case str == "form": return "Formulario";
      case str == "systemLogin": return "Entrada al sistema";
      case str == "systemLogout": return "Salida del sistema";
      case str == "reset": return "Limpiar";
      case str == "filter": return "Filtro";
      case str == "search": return "Buscar";
      case str == "find": return "Encontrar";
      case str == "rpp": return "Registros por página";
      case str == "page": return "Página";
      case str == "yes": return "Sí";
      case str == "no": return "No";
      case str == "accept": return "Aceptar";
      case str == "reject": return "Rechazar";
      case str == "description": return "Descripcion";
      case str == "units": return "Unidades";
      case str == "total": return "Total";
      case str == "tools": return "Herramientas";
      case str == "code": return "Código";
      case str == "name": return "Nombre";
      case str == "data": return "Datos";
      case str == "reportdata": return "Datos del informe";
      case str == "reportname": return "Nombre del informe";
      case str == "amount": return "Cantidad";

      //
      case str == "user-carritocontent": return "Contenido de tu carrito";
      case str == "productDetail": return "Detalle de producto";
      case str == "randomRegistersLoad": return "Carga aleatoria de registros";
      //
      case str == "selectionHelp": return "Por favor, selecciona";
      //
      case str == "productsInCart": return "Productos en el carrito";
      case str == "totalInCart": return "Total pedido en carrito";
      case str == "vatIncluded": return "IVA incluido";
      case str == "totalVATIncluded": return "Total IVA incluido";
      case str == "totalDiscountsIncluded": return "Total (descuentos incluidos)";
      case str == "invoiceLines": return "Líneas de factura";
      default: return 'Desconocido';
    }
  }

  public getFilterMsg(strFilter: string, strEntity1: string, entity1Filter: number, strEntity2: string, entity2Filter: number): string {
    if (entity1Filter !== null && entity1Filter !== undefined) {
      if (entity2Filter !== null && entity2Filter !== undefined) {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getName('the' + strEntity1) + ' con id=' + entity1Filter + ', por ' + this.getName('the' + strEntity2) + ' con id=' + entity2Filter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getName('the' + strEntity1) + ' con id=' + entity1Filter + ', por ' + this.getName('the' + strEntity2) + ' con id=' + entity2Filter + ' y sin filtro';
        }
      } else {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getName('the' + strEntity1) + ' con id=' + entity1Filter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getName('the' + strEntity1) + ' con id=' + entity1Filter + ' y sin filtro';
        }
      }
    } else {
      if (entity2Filter !== null && entity2Filter !== undefined) {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getName('the' + strEntity2) + ' con id=' + entity2Filter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getName('the' + strEntity2) + ' con id=' + entity2Filter + ' y sin filtro';
        }
      } else {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por el filtro ' + strFilter;
        } else {
          return 'Sin filtro';
        }
      }
    }
  }

  getFilteredMessage1(strFilter: string, strEntity: string, entityFilter: number): string {
    {
      if (entityFilter !== null && entityFilter !== undefined) {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getName('the' + strEntity) + ' con id=' + entityFilter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getName('the' + strEntity) + ' con id=' + entityFilter + ' y sin filtro';
        }
      } else {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por el filtro ' + strFilter;
        } else {
          return 'Sin filtro';
        }
      }
    }
  }

  /////////////////////////////////////////
  // OLD (TODO: REMOVE)
  /////////////////////////////////////////
  /*
    public getIcon(strIcon: string): string {
  
      switch (true) {
        // 
        case strIcon == "fecha": return "far fa-clock"; //cambiar a date
        case strIcon == "cantidad": return "fas fa-mountain"; //amount
        case strIcon == "euro": return "fas fa-euro-sign";
        case strIcon == "precio": return "fas fa-euro-sign"; //price
        case strIcon == "porcentaje": return "fas fa-percent"; //percent
        case strIcon == "descuento": return "fas fa-percent";
        case strIcon == "codigo": return "fas fa-barcode"; //code
        case strIcon == "imagen": return "fas fa-camera"; //image
        //
        case strIcon == "print": return "fas fa-print";
        case strIcon == "imprimir": return "fas fa-print";
        case strIcon == "informe": return "fas fa-file-alt"; //cambiar a report
        case strIcon.startsWith("report"): return "fas fa-copy";
        // 
        case strIcon == "home": return "fas fa-home";
        case strIcon == "login": return "fas fa-sign-in-alt";
        case strIcon == "logout": return "fas fa-sign-out-alt";
        case strIcon == "usuarios": return "fas fa-user-friends";
  
        case strIcon == "entradaSistema": return "fas fa-sign-in";
        case strIcon == "salidaSistema": return "fas fa-sign-in";
        case strIcon == "reset": return "fas fa-brush";
        case strIcon == "carroImagenes": return "fas fa-cart-plus";
        // 
        case strIcon == "filtro": return "fas fa-filter";
        case strIcon == "buscar": return "fas fa-search";
        case strIcon == "rpp": return "fas fa-file-alt";
        // 
        case strIcon == "seleccionar": return "fas fa-check";
        case strIcon == "ok": return "fas fa-check-square";
        case strIcon == "aceptar": return "fas fa-check-circle";
        case strIcon == "rechazar": return "fas fa-times-circle";
        case strIcon == "volver": return "fas fa-arrow-circle-left";
  
  
        case strIcon == "seleccion": return "fas fa-bullseye";
        //
        //
        //
        //
        //
        // 
        case strIcon == "tools": return "fas fa-tools";
        case strIcon == "acciones": return "fas fa-tools"; //ojo borrar
  
        case strIcon == "view": return "fas fa-eye";
        case strIcon == "plist": return "fas fa-list";
        case strIcon == "listado": return "fas fa-stream";
        case strIcon == "remove": return "fas fa-trash";
        case strIcon == "new": return "fas fa-plus";
        case strIcon == "edit": return "fas fa-pen";
        case strIcon == "random": return "fas fa-random";
        case strIcon == "save": return "fas fa-floppy-disk";
        // 
        case strIcon == "orderUp": return "fas fa-arrow-up";
        case strIcon == "orderDown": return "fas fa-arrow-down";
        //
        // entities
        case strIcon == "system": return "fas fa-shopping-basket";
        case strIcon == "producto": return "fas fa-gift";
        case strIcon == "tipoproducto": return "fas fa-tag";
        case strIcon == "usuario": return "fas fa-user";
        case strIcon == "tipousuario": return "fas fa-user-tag";
        case strIcon == "compra": return "fas fa-cash-register";
        case strIcon == "factura": return "fas fa-file-invoice-dollar";
        case strIcon == "carrito": return "fas fa-shopping-cart";
        // id      
        case strIcon == "id": return "fas fa-key";
        // fields - usuario      
        case strIcon == "dni": return "fas fa-address-card";
        case strIcon == "nombre": return "fas fa-signature";
        case strIcon == "apellido1": return "fas fa-signature";
        case strIcon == "apellido2": return "fas fa-signature";
        case strIcon == "email": return "fas fa-at";
        case strIcon == "validado": return "fas fa-user-check";
        case strIcon == "activado": return "fas fa-flag-checkered";
        //
  
        //
        case strIcon == "github": return "fab fa-github";
        case strIcon == "github-alt": return "fab fa-github-alt";
        //
        default: return 'fas fa-question';
  
  
  
  
  
      }
  
    }
  */




}

