import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number = 0;
  timer: number = 180;
  interval: any; // varible used to stop the Interval timer
  wordsToGuess: string[] = ["Sister", "Snow", "Family","Brother", "Friend", "School", "Daddy", "Mommy"];
  currentProblem: string; // IMPORTANT: Currently 11 length max or update design responsiveness
  currentGuessedLetters: string[] = [];
  displayArray: string[] = [];
  gameLives: number[] = [1,2,3,4,5];
  gameOver: boolean = false;
  answerPhrasePopup: boolean = false;
  scoreAnimation: boolean = false;

  constructor() {
    this.interval = setInterval(()=> this.countdown(), 1000);
    this.createDisplayedProblem(this.getRandomPhrase());
  }

  // Method passed to App-Input component to get the letter the user inputed and apply to the word problem
  getLetter($event) {
    if(!this.currentGuessedLetters.includes($event)){
      this.updateScore($event, this.currentProblem); // Update the score
      this.currentGuessedLetters.push($event); // Track the current guessed letters
      this.createDisplayedProblem(this.currentProblem); // Display the current phrase with or with letters    
      this.checkWinConditions(); // Check if the game has been won.
    }    
  }

  // allow user to answer entire word
  getAnswer($event){
    let officialAnswer:string = this.currentProblem;
    let formattedAnswer:string = $event;
    if(officialAnswer.toLocaleLowerCase() === formattedAnswer.toLocaleLowerCase()){
      this.displayArray = officialAnswer.split("");
      this.score += 60; // Extra 60 points
      this.timer += 60 // extra 60 seconds
      this.checkWinConditions(); // Check if the game has been won.
    }else{
      if(this.score >= 60){
        this.score -= 60;
      }else{
        this.score = 0;
      }
      this.animateScore();
    }

    this.answerPhrasePopup = false;
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

  /* Update the score by checking if the inputted letter is in the phrased and not already guessed. If the letter is not 
  *  in the phrase and not in the current guess letter array, then remove a heart.
  */
  updateScore(letter: string ,phrase: string){
    let phraseArray = phrase.toLowerCase().split("");
    const updatedLetter = letter.toLowerCase();
    if(phraseArray.includes(updatedLetter) && !this.currentGuessedLetters.includes(updatedLetter)){
      this.score += 10;
      this.animateScore();
    }else{
      this.gameLives.pop();
    }
  }

  // Add points for getting all the correct letters in the phrased and start next game
  checkWinConditions(){
    if(!this.displayArray.includes("_")){
      this.score += 100;
      this.animateScore();
      this.setupNextGame();
      this.gameLives.push(this.gameLives.length + 1); // Get a heart for answer
      this.timer = this.timer + 60; // Gain a minute
    }
  }


  // method to reset the game after a player gets all the correct letters of the phrase
  setupNextGame(){
    this.currentGuessedLetters = [];
    this.createDisplayedProblem(this.getRandomPhrase());
  }

  // Method used in the toolbox section restart button to restart
  restartGame($event){
    this.gameLives = [1,2,3,4,5];
    this.score = 0;
    this.currentGuessedLetters = [];
    this.createDisplayedProblem(this.getRandomPhrase());
    this.timer = 180;
    clearInterval(this.interval); 
    this.interval = setInterval(()=> this.countdown(), 1000); // reset the timer
    this.gameOver= false;
  }

  // Method to allow the user to buy time with their points
  buyTime($event){
    if(this.score >= 20){
      this.score -= 20;
      this.timer += 60
    }
  }

  // Method to switch between user inputing one charater or one word
  answerPhrase($event){
    this.answerPhrasePopup = true;
  }

  // Method to get a random word from the array of phrases
  getRandomPhrase(){
    const randomNumber = Math.floor(Math.random() * this.wordsToGuess.length);
    let currentWord = this.wordsToGuess[randomNumber];
    this.wordsToGuess.splice(randomNumber,1);
    this.currentProblem = currentWord;
    return currentWord;
  }

  // function to animate the score
  animateScore(){
    setTimeout(()=> this.scoreAnimation = false, 300);
    this.scoreAnimation = true
  }

}
