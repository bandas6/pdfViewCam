import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iniciales'
})
export class InicialesPipe implements PipeTransform {

  transform(valor: any, ...args: unknown[]): unknown {
    if(valor) return valor.substr(0,1)    
    return '';
  }

}
