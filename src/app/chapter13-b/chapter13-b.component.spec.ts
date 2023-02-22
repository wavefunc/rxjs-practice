import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter13BComponent } from './chapter13-b.component';

describe('Chapter13BComponent', () => {
  let component: Chapter13BComponent;
  let fixture: ComponentFixture<Chapter13BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter13BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter13BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
