import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {
  @Input() score:string;
  @Output() restart = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
