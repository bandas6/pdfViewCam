import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unaPalabra'
})
export class UnaPalabraPipe implements PipeTransform {

  transform(valor: any, ...args: unknown[]): unknown {
    if(valor) {
      let palabras = valor.split(" ");
      return palabras[0];    
    }
    return '';
  }

}
