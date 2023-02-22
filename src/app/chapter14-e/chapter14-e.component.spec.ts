import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter14EComponent } from './chapter14-e.component';

describe('Chapter14EComponent', () => {
  let component: Chapter14EComponent;
  let fixture: ComponentFixture<Chapter14EComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter14EComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter14EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
