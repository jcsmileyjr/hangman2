import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Output() restart = new EventEmitter<string>();
  @Output() buyTime = new EventEmitter<string>();
  @Output() answerPhrase = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  restartGame(){
    this.restart.emit();
  }

}
