import { Pipe, PipeTransform, inject } from '@angular/core';
import { map } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Pipe({
  name: 'obtenerInfoJugador',
})
export class ObtenerInfoJugadorPipe implements PipeTransform {

  usuariosService = inject(UsuariosService);

  transform(id: any) {
    return this.usuariosService.obtenerUsuario(id).pipe(
      map((resp: any) => {
        if(resp.usuario){
          let nombre:any = resp.usuario.nombre;
          return nombre;
        }else{
          return "Eliminado";
        }
      })
    );
  }

}
