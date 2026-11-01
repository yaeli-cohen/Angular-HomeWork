import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLesson4 } from './parent-lesson-4';

describe('ParentLesson4', () => {
  let component: ParentLesson4;
  let fixture: ComponentFixture<ParentLesson4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentLesson4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLesson4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
