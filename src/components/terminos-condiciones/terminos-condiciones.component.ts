import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.scss'],
})
export class TerminosCondicionesComponent  implements OnInit {

  modalController = inject(ModalController);

  ngOnInit() {}

  cerrarModal(){
    this.modalController.dismiss();
  }

}
