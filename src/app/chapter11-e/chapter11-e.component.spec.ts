import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter11EComponent } from './chapter11-e.component';

describe('Chapter11EComponent', () => {
  let component: Chapter11EComponent;
  let fixture: ComponentFixture<Chapter11EComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter11EComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter11EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
