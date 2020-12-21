import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number = 0;
  timer: number = 180;
  interval;
  problem: string = "Celebration"; // IMPORTANT: Currently 11 length max or update design responsiveness
  currentGuessedLetters: string[] = ["e", "a", "c", "n", "b", "t","l"];
  displayArray: string[] = [];
  lives: number[] = [1,2,3,4,5];
  gameOver: boolean = false;

  constructor() {
    this.interval = setInterval(()=> this.countdown(), 1000);
    this.createDisplayedProblem(this.problem);
  }

  getLetter($event) {
    console.log($event)
  }

  // Countdown timer that ends game
  countdown(){
    this.timer = this.timer - 1;
    if(this.timer <= 0){
      this.gameOver = true;
      clearInterval(this.interval);
    }
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
