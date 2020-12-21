import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedLettersComponent } from './used-letters.component';

describe('UsedLettersComponent', () => {
  let component: UsedLettersComponent;
  let fixture: ComponentFixture<UsedLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
