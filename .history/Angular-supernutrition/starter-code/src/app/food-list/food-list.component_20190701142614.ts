import { Component, OnInit } from '@angular/core';

import { Food } from '../food';
import { FOODS } from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  titbusc = 'Search';


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

/*
addFood:Food;
onclick(food:Food):void{
this.addFood=food.push({name: Food, {calories: Food}, {image: "https://img.lovepik.com/element/40033/0375.png_860.png"}, {quantity: Food});
}
Failed to compile.

C:/xampp/htdocs/workplace_Angular/Angular-supernutrition/starter-code/src/app/food-list/food-list.component.ts (35,19): Property 'push' does not exist on type 'Food'.

*  /vediamo se funziona
addFood(item: any){
  console.log("sto cazzo");
  this.food.push({name: item}, {calories: item}, {image: "https://img.lovepik.com/element/40033/0375.png_860.png"}, {quantity: item});

  }
*/

  filterFood='';


  constructor() { }

  ngOnInit() {
  }

}
