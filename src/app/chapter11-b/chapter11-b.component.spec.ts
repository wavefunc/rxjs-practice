import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter11BComponent } from './chapter11-b.component';

describe('Chapter11BComponent', () => {
  let component: Chapter11BComponent;
  let fixture: ComponentFixture<Chapter11BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter11BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter11BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
