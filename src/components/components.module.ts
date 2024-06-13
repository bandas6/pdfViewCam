import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsRoutingModule } from './components-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';

// import { PipesModule } from 'src/app/pipes/pipes.module';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuOpcionesComponent,
    FooterComponent,
    TerminosCondicionesComponent
  ],
  exports: [
    HeaderComponent,
    MenuOpcionesComponent,  
    FooterComponent,
    TerminosCondicionesComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    // PipesModule
  ]
})
export class ComponentsModule { }
