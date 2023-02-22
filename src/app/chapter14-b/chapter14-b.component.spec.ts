import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter14BComponent } from './chapter14-b.component';

describe('Chapter14BComponent', () => {
  let component: Chapter14BComponent;
  let fixture: ComponentFixture<Chapter14BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter14BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter14BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
