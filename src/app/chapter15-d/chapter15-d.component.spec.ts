import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter15DComponent } from './chapter15-d.component';

describe('Chapter15DComponent', () => {
  let component: Chapter15DComponent;
  let fixture: ComponentFixture<Chapter15DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter15DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter15DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
