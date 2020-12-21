import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {
  @Input() score:string;
  constructor() { }

  ngOnInit(): void {
  }

}
