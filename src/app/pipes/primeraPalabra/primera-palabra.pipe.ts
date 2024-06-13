import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraPalabra'
})
export class PrimeraPalabraPipe implements PipeTransform {

  transform(valor: any, ...args: unknown[]): unknown {
    if(valor) return valor.split(' ')[0];
    return '';
  }

}
