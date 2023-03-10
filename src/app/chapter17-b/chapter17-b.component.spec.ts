import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter17BComponent } from './chapter17-b.component';

describe('Chapter17BComponent', () => {
  let component: Chapter17BComponent;
  let fixture: ComponentFixture<Chapter17BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter17BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter17BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
