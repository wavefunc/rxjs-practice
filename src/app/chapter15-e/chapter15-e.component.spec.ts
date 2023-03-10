import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter15EComponent } from './chapter15-e.component';

describe('Chapter15EComponent', () => {
  let component: Chapter15EComponent;
  let fixture: ComponentFixture<Chapter15EComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter15EComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter15EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
