import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter14AComponent } from './chapter14-a.component';

describe('Chapter14AComponent', () => {
  let component: Chapter14AComponent;
  let fixture: ComponentFixture<Chapter14AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter14AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter14AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
