import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular02';
  disable = false;
  textoActivo="clica aqui para activar";
  texto="clica aqui para activar";

  mostrarAviso(){
  alert('has pulsado sto cazzo')
}
}
