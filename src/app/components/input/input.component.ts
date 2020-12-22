import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() getLetter = new EventEmitter<string>(); // Get the method from the parent
  constructor() { }

  ngOnInit(): void {
  }

  // Method called in the input that calls the method passed on from the parent to get the letter entered by the user
  getValue(value: string){
    if(/[a-zA-Z]/.test(value)){
      this.getLetter.emit(value)
    }
    
  }

}
