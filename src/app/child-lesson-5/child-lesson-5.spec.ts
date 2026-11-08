import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLesson5 } from './child-lesson-5';

describe('ChildLesson5', () => {
  let component: ChildLesson5;
  let fixture: ComponentFixture<ChildLesson5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLesson5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLesson5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
