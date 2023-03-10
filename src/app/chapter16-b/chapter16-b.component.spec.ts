import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter16BComponent } from './chapter16-b.component';

describe('Chapter16BComponent', () => {
  let component: Chapter16BComponent;
  let fixture: ComponentFixture<Chapter16BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter16BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter16BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
