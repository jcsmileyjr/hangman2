import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number = 0;
  timer: number = 90;
  problem: string = "Celebration";
  currentGuessedLetters: string[] = ["e", "a", "c", "n", "b", "t","l"];
  displayArray: string[] = [];

  constructor() {
    this.createDisplayedProblem(this.problem);
  }


  createDisplayedProblem = (phrase: string) => {    
    let phraseArray = phrase.split("")
    this.displayArray = phraseArray.map(letter => {
      if(this.currentGuessedLetters.includes(letter.toLowerCase())){
        return letter;
      }else{
        return "_";
      }
    })    
  }
}
