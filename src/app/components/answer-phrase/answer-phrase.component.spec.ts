import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerPhraseComponent } from './answer-phrase.component';

describe('AnswerPhraseComponent', () => {
  let component: AnswerPhraseComponent;
  let fixture: ComponentFixture<AnswerPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerPhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
