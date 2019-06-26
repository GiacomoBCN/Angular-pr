import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {
  title = "Comments: ";
  testoCom="Natoque cubilia lorem nostra faucibus arcu metus, interdum eros ipsum lobortis justo Taciti tristique varius non in dis, eros condimentum eu fusce parturient quisque tristique quam etiam semper donec sollicitudin ut tempus. Habitant aenean imperdiet, dictumst dui semper lacus torquent semper sed turpis ante consectetuer tempus urna dui. Volutpat. Feugiat sociosqu facilisi inceptos convallis. "

  constructor() { }

  ngOnInit() {
  }

}
