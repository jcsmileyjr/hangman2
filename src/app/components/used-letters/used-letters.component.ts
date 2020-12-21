import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-used-letters',
  templateUrl: './used-letters.component.html',
  styleUrls: ['./used-letters.component.css']
})
export class UsedLettersComponent implements OnInit {
  @Input() oldLetters: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
