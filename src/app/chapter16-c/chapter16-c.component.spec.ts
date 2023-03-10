import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter16CComponent } from './chapter16-c.component';

describe('Chapter16CComponent', () => {
  let component: Chapter16CComponent;
  let fixture: ComponentFixture<Chapter16CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter16CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter16CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
