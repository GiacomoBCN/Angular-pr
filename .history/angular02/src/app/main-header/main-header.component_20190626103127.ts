import { ModuleWithComponentFactories } from '@angular/core';
iportm
nngimport { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
fecha:any=moment().
  constructor() { }

  ngOnInit() {
  }

}
