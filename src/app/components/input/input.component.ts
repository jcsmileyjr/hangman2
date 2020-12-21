import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  userAnswer: string = "";
  @Output() getLetter = new EventEmitter<string>(); // Get the method from the parent
  constructor() { }

  ngOnInit(): void {
  }

  getValue(value: string){
    this.userAnswer = value;
    this.getLetter.emit(this.userAnswer)
  }

}
