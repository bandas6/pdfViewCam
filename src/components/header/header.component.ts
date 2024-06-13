import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
// import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  menuController = inject(MenuController);

  // authService = inject(AuthService);

  @Input() noInicio: boolean = false;
  @Input() titulo: string = "";
  @Input() tabMenu: string = "primero";
  @Input() ocultarVolver: boolean = false;
  @Input() cargando: boolean = false;

  usuario: any;
  versionAplicacion = "0.0.1";
  storageSubscription!: Subscription;

  constructor() { }

  openFirst() {
    this.menuController.enable(true, this.tabMenu);
    this.menuController.open(this.tabMenu);
  }

  async ngOnInit() {
    await this.cargandoUsuario();
    // this.storageSubscription = this.authService.storageChanges.subscribe(async (change:any) => {
    //   if (change && change.key === 'usuario') {
    //     await this.cargandoUsuario();
    //   }
    // });
  }

  ngOnDestroy() {
    this.storageSubscription.unsubscribe();
  }

  async onStorageChange(event: StorageEvent) {
    if (event.key === 'usuario') {
      await this.cargandoUsuario();
    }
  }

  async cargandoUsuario(){
    // this.authService.obtenerUsuario().then((resp) => {
    //   this.usuario = resp;
    // });
  }

}
