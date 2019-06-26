import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular02';
  disable = false;
  textoSaludar = "Este bo";
  textoDisactivo = "Este botton no funciona ahora";
  disabled = false;
  disabledOff = true;
  botonVerde() {
    this.disabled = this.disabled;

  }

mostrarAviso(){

}

activarSludo(){


}

disactivarSaluo(){

}
}
