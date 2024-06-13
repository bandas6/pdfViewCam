import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplificarClasificacion'
})
export class SimplificarClasificacionPipe implements PipeTransform {

  transform(valor: any, ...args: unknown[]): unknown {
    if(valor){
      let valorFormateado = valor.toLowerCase();
      let textoQuitar = /de lo/gi;
      valorFormateado = valorFormateado.replace(textoQuitar, "");
      valorFormateado = valorFormateado.replace("  ", "_");
      textoQuitar = /á/gi;
      valorFormateado = valorFormateado.replace(textoQuitar, "a");
      valorFormateado = valorFormateado.replace("(", "");
      valorFormateado = valorFormateado.replace(")", "");
      textoQuitar = / /gi;
      valorFormateado = valorFormateado.replace(textoQuitar, "_");
      return valorFormateado;
    }else{
      return '';
    }
  }

}
