import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { Food } from '../food';
import {  } from '../mock-heroes';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
