import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter17AComponent } from './chapter17-a.component';

describe('Chapter17AComponent', () => {
  let component: Chapter17AComponent;
  let fixture: ComponentFixture<Chapter17AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter17AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter17AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
