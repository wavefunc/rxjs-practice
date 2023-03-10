import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter15FComponent } from './chapter15-f.component';

describe('Chapter15FComponent', () => {
  let component: Chapter15FComponent;
  let fixture: ComponentFixture<Chapter15FComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter15FComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter15FComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
