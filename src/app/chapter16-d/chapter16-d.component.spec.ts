import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter16DComponent } from './chapter16-d.component';

describe('Chapter16DComponent', () => {
  let component: Chapter16DComponent;
  let fixture: ComponentFixture<Chapter16DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter16DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter16DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
