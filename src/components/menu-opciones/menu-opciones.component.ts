import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

// import { AuthService } from 'src/app/services/auth/auth.service';
// import { TokenService } from 'src/app/services/token/token.service';
// import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.scss'],
})
export class MenuOpcionesComponent implements OnInit {
  
  @Input() moduloSeleccionado: any = '';
  @Input() tabMenu: any = '';

  // usuarioService = inject(UsuariosService);
  // tokenService = inject(TokenService);
  // authService = inject(AuthService);
  router = inject(Router);

  navController = inject(NavController);
  modalController = inject(ModalController);

  usuario: any;
  usuarioAuthentificado: any;
  mostrarEditar: boolean = false;

  ngOnInit() {
    this.obtenerUsuarioAuhenticado();
  }

  // menuOpciones(ruta) {
  //   this.utilsService.sendRuta(ruta);
  // }

  obtenerUsuarioAuhenticado() {
    // this.authService.obtenerUsuario().then((resp: any) => {
    //   this.usuarioAuthentificado = resp;
    //   if(this.usuarioAuthentificado.equipo_id){
    //     this.mostrarEditar = true;
    //   }
    // })
  }

  async agregarEquipo() {
    // const modal = await this.modalController.create({
    //   component: ModalRegistrarEquipoComponent,
    //   cssClass: 'modals',
    // });
    // await modal.present();

    // const { data } = await modal.onDidDismiss();

    // console.log(data)
    // if (data.cerrarModalUno) {
    //   this.navController.navigateRoot(['/tabs/tab2/noticias']);
    // }

  }

  async editarEquipo() {
  
  }

  async editarUsuario(){
    //   const modal = await this.modalController.create({
    //   component: ModalAjustarPerfilComponent,
    //   cssClass: 'modals',
    //   componentProps: {
    //     "editar": true
    //   }
    // });
    // await modal.present();
  }

  async verEquipo(){
    this.router.navigate([`/tabs/tab2/noticias/ver/${this.usuarioAuthentificado.equipo_id}`])
  }

  async cerrarSesion() {
    // await this.authService.eliminarUsuario();
    // await this.tokenService.eliminarToken();
    // this.navController.navigateRoot(['/login']);
    // this.usuario = null;
  }



}
