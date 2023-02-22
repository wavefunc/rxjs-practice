import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter14FComponent } from './chapter14-f.component';

describe('Chapter14FComponent', () => {
  let component: Chapter14FComponent;
  let fixture: ComponentFixture<Chapter14FComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter14FComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter14FComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
