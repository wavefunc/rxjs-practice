import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter14DComponent } from './chapter14-d.component';

describe('Chapter14DComponent', () => {
  let component: Chapter14DComponent;
  let fixture: ComponentFixture<Chapter14DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter14DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter14DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
