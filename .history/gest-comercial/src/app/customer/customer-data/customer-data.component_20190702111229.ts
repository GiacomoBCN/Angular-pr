import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

identifier: any;

  constructor( private route: At ) {

   }

  ngOnInit() {
    this.route.params
  }

}
