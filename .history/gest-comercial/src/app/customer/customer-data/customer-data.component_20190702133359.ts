import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { customers } from 'src/app/shared/data/data';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

public identifier: any;

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
   /* this.route.params.subscribe(miParams => {this.identifier = miParams['id']; } ) alternativa qua sotto questasoluzione riutilizz a l'oggetto  mentre quello sotto ogni volta fa un oggettonuovo   */

    this.identifier = this.route.snapshot.params['id'];

This.cliente= this.costumer.filter(parametro=> {return.parametro._id ===this.identifier})

  }

}
