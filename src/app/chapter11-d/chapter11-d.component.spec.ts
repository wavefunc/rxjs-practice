import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter11DComponent } from './chapter11-d.component';

describe('Chapter11DComponent', () => {
  let component: Chapter11DComponent;
  let fixture: ComponentFixture<Chapter11DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter11DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter11DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
