import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLesson5 } from './parent-lesson-5';

describe('ParentLesson5', () => {
  let component: ParentLesson5;
  let fixture: ComponentFixture<ParentLesson5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentLesson5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLesson5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
