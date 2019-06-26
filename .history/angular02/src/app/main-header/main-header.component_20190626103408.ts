import { ModuleWithComponentFactories } from '@angular/core';
import* as moment from 'moment';
nngimport { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
fecha:any=moment().format("25-06-2019");
  constructor() {
this.fecha=mo
   }

  ngOnInit() {
  }

}
