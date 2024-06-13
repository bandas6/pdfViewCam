import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialesPipe } from './iniciales/iniciales.pipe';
import { UnaPalabraPipe } from './unaPalabra/una-palabra.pipe';
import { SanearURLPipe } from './sanearURL/sanear-url.pipe';
import { PrimeraPalabraPipe } from './primeraPalabra/primera-palabra.pipe';
import { SimplificarClasificacionPipe } from './simplicarClasificacion/simplificar-clasificacion.pipe';
import { CantidadEstrellasPipe } from './cantidadEstrellas/cantidad-estrellas.pipe';
import { ObtenerInfoJugadorPipe } from './obtenerInfoJugador/obtener-info-jugador.pipe';



@NgModule({
  declarations: [
    InicialesPipe,
    UnaPalabraPipe,
    SanearURLPipe,
    PrimeraPalabraPipe,
    SimplificarClasificacionPipe,
    CantidadEstrellasPipe,
    ObtenerInfoJugadorPipe
  ],
  exports: [
    InicialesPipe,
    UnaPalabraPipe,
    SanearURLPipe,
    PrimeraPalabraPipe,
    SimplificarClasificacionPipe,
    CantidadEstrellasPipe,
    ObtenerInfoJugadorPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
