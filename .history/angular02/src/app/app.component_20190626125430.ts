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
  disabled=false;
  disabledOff=true;
  botonVerde(){
this.import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Model } from '../core';

@Injectable({ providedIn: 'root' })
export class ModelService extends EntityCollectionServiceBase<Model> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Model', serviceElementsFactory);
  }
}
  }
  mostrarAviso(){
  alert('has pulsado sto cazzo')
}
}
