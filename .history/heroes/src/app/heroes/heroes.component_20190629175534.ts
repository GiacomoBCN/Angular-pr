import { Component, OnInit } from '@angular/core';
import { Hero } from 'hero.t';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}
