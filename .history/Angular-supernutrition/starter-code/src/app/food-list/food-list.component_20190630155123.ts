import { Component, OnInit } from '@angular/core';
//import  foods  from '../foods';
import { Food } from '../food';
import { FOODS } from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  titbusc = 'Buscar';


  food: Food = {
  name: "",
  calories: 0,
  image: "",
  quantity: 0,
  };


  foods = FOODS;
  selectedFood: Food;
  onSelect(food: Food): void {
    this.selectedFood = food;
  }


  constructor() { }

  ngOnInit() {
  }

}
