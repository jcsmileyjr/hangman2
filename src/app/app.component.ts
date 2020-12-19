import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number = 0;
  timer: number = 90;
  problem: string = "Party";
  currentGuessedLetters: string[] = [];
  displayArray: string[] = [];

  constructor() {
    this.createDisplayedProblem(this.problem);
  }


  createDisplayedProblem = (phrase: string) => {
    
    /*
    let phraseArray = phrase.split("")
    this.displayArray = phraseArray.map(letter => {
      if(letter !== " "){
        return "blank";
      }else{
        return "space";
      }
    })
    console.table(this.displayArray);
    */
  }
}
