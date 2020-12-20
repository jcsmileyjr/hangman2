import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lives',
  templateUrl: './lives.component.html',
  styleUrls: ['./lives.component.css']
})
export class LivesComponent implements OnInit {
  @Input() lives: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
