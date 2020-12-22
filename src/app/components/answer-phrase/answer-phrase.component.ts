import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-phrase',
  templateUrl: './answer-phrase.component.html',
  styleUrls: ['./answer-phrase.component.css']
})
export class AnswerPhraseComponent implements OnInit {
  @Output() getAnswer = new EventEmitter<string>(); // Get the method from the parent
  constructor() { }

  ngOnInit(): void {
  }

  // Method called in the input that calls the method passed on from the parent to get the word entered by the user
  getValue(value: string){
    if(/[a-zA-Z]/.test(value)){
      this.getAnswer.emit(value)
    }
  }

}
