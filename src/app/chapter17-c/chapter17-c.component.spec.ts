import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter17CComponent } from './chapter17-c.component';

describe('Chapter17CComponent', () => {
  let component: Chapter17CComponent;
  let fixture: ComponentFixture<Chapter17CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter17CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter17CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
