import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {
  title = "Tiolo della pagina lo chiami titolo nel html";
  constructor() { }

  ngOnInit() {
  }

}
