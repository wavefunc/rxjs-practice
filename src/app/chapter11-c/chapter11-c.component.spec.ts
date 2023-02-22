import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter11CComponent } from './chapter11-c.component';

describe('Chapter11CComponent', () => {
  let component: Chapter11CComponent;
  let fixture: ComponentFixture<Chapter11CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter11CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter11CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
