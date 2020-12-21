import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number = 0;
  timer: number = 180;
  interval; // varible used to stop the Interval timer
  problem: string = "Celebration"; // IMPORTANT: Currently 11 length max or update design responsiveness
  numberOfCorrectLetters: number = 0;
  currentGuessedLetters: string[] = [];
  displayArray: string[] = [];
  lives: number[] = [1,2,3,4,5];
  gameOver: boolean = false;

  constructor() {
    this.interval = setInterval(()=> this.countdown(), 1000);
    this.createDisplayedProblem(this.problem);
  }

  // Method passed to App-Input component to get the letter the user inputed and apply to the word problem
  getLetter($event) {
    this.updateScore($event, this.problem); // Update the score
    this.currentGuessedLetters.push($event); // Track the current guessed letters
    this.createDisplayedProblem(this.problem); // Display the current phrase with or with letters    
    this.checkWinConditions(this.problem); // Check if the game has been won.
  }

  // Countdown timer that ends game
  countdown(){
    this.timer = this.timer - 1;
    if(this.timer <= 0){
      this.gameOver = true;
      clearInterval(this.interval);
    }
  }

  // Method to update the word problem based on the letter the user inputted. 
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

  // Update the score by checking if the inputted letter is in the phrased and not already guessed. Also tracks the number of correct answers
  updateScore(letter: string ,phrase: string){
    let phraseArray = phrase.toLowerCase().split("");
    const updatedLetter = letter.toLowerCase();
    if(phraseArray.includes(updatedLetter) && !this.currentGuessedLetters.includes(updatedLetter)){
      this.score += 10;
      this.numberOfCorrectLetters += 1;
    }
  }

  // Add points for getting all the correct letters in the phrased. 
  checkWinConditions(originalPhrase: string ){
    if(originalPhrase.length === this.numberOfCorrectLetters){
      this.score += 100;
    }
  }

}
