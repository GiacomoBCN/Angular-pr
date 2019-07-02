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
  _id: '',
  index: '',
  guid: '',
  age: '',
  name: '',
  gender: '',
  company: '',
  email: '',
  phone: '',
  address: '',
};

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {


    this.identifier = this.route.snapshot.params['id'];

  this.cliente = this.costumer.filter(parametro=> {return parametro._id == this.identifier});

  }

}
