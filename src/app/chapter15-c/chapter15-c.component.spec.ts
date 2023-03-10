import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter15CComponent } from './chapter15-c.component';

describe('Chapter15CComponent', () => {
  let component: Chapter15CComponent;
  let fixture: ComponentFixture<Chapter15CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter15CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter15CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
