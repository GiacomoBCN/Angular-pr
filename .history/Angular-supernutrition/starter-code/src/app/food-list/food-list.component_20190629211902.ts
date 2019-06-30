import { Component, OnInit } from '@angular/core';
import  foods  from '../foods';
import { Food } from '../food';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  food: Food = {
  name: "",
  calories: 0,

  image: "",

  quantity: 0,
  };

  foods = FOODS;
  selectedFood: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  constructor() { }

  ngOnInit() {
  }

}
