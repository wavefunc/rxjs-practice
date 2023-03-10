import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter16AComponent } from './chapter16-a.component';

describe('Chapter16AComponent', () => {
  let component: Chapter16AComponent;
  let fixture: ComponentFixture<Chapter16AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter16AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter16AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
