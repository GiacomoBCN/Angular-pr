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

    customers.forEach(this.identifier =>  {
      _id: '5d1b2e73fa737f438a4333a8',
      index: 0,
      guid: 'd25a3af6-de4e-4d2c-ab70-272c32cab646',
      age: 37,
      name: 'Giles Parrish',
      gender: 'male',
      company: 'ENDIPIN',
      email: 'gilesparrish@endipin.com',
      phone: '+1 (875) 401-3000',
      address:
});

  }

}
