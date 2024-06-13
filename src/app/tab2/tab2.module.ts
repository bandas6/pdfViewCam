import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab2Page } from './tab2.page';

import { CamViewComponent } from './cam-view/cam-view.component';
import { VerInformacionPdfComponent } from './components/ver-informacion-pdf/ver-informacion-pdf.component';
import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, CamViewComponent, VerInformacionPdfComponent]
})
export class Tab2PageModule {}
