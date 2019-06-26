import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular02';
  disable = false;
  textoSaludar = "Este boston esta activado";
  textoDisactivo = "Este botton no funciona ahora";
  texstoActivar="activar botton saludo";
  disabled = false;
  disabledOff = true;
  botonVerde() {
    this.disabled = this.disabled;

  }


mostrarAviso(){
alert('has pulsdo el boton');
}

activarSludo(){
this.texstoActivar="este "

}

disactivarSaluo(){

}
}
