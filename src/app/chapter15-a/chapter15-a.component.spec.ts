import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter15AComponent } from './chapter15-a.component';

describe('Chapter15AComponent', () => {
  let component: Chapter15AComponent;
  let fixture: ComponentFixture<Chapter15AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter15AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter15AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
