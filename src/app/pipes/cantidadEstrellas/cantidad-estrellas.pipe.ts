import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidadEstrellas',
})
export class CantidadEstrellasPipe implements PipeTransform {

  transform(value: number = 0): any {

    let array: any[] = [];
    
    for (let index = 0; index < value; index++) {
      array.push(index);
    }

    return array;
  }

}
