import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TimerComponent } from './components/timer/timer.component';
import { ProblemComponent } from './components/problem/problem.component';
import { InputComponent } from './components/input/input.component';
import { LivesComponent } from './components/lives/lives.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { GameOverComponent } from './components/game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerComponent,
    ProblemComponent,
    InputComponent,
    LivesComponent,
    ToolboxComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
