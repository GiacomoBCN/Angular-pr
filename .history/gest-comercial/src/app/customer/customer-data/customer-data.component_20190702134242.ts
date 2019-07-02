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
public customer: any;
public cliente = {
  _id: string,
  index: number,
  guid: string,
  age: number,
  name: string,
  gender: string,
  company: string
  email: string;
  phone: string;
  address: string;
}

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
   /* this.route.params.subscribe(miParams => {this.identifier = miParams['id']; } ) alternativa qua sotto questasoluzione riutilizz a l'oggetto  mentre quello sotto ogni volta fa un oggettonuovo   */

    this.identifier = this.route.snapshot.params['id'];

this.cliente = this.costumers.filter(parametro=> {return parametro._id ===this.identifier});

  }

}
