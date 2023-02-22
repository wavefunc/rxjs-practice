import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter14CComponent } from './chapter14-c.component';

describe('Chapter14CComponent', () => {
  let component: Chapter14CComponent;
  let fixture: ComponentFixture<Chapter14CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter14CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter14CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
