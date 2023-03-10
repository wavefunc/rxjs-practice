import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter15BComponent } from './chapter15-b.component';

describe('Chapter15BComponent', () => {
  let component: Chapter15BComponent;
  let fixture: ComponentFixture<Chapter15BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter15BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter15BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
