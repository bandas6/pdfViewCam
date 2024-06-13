import { Component, Input, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ver-informacion-pdf',
  templateUrl: './ver-informacion-pdf.component.html',
  styleUrls: ['./ver-informacion-pdf.component.scss'],
})
export class VerInformacionPdfComponent  implements OnInit {

  modalController = inject(ModalController);

  @Input() informacion: any;

  ngOnInit() {}

  cerrarModal(){
    this.modalController.dismiss({cerrar:true});
  }


}
