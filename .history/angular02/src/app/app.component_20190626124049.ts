import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular02';
  disable = false;
  textoActivo = "clica aqui para activar";
  textoDisactivo = "Este botton no funciona ahora";
activarbot
  mostrarAviso(){
  alert('has pulsado sto cazzo')
}
}
