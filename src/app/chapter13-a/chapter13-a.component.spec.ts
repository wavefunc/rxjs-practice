import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter13AComponent } from './chapter13-a.component';

describe('Chapter13AComponent', () => {
  let component: Chapter13AComponent;
  let fixture: ComponentFixture<Chapter13AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter13AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter13AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
