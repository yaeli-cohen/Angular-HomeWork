import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLesson4 } from './child-lesson-4';

describe('ChildLesson4', () => {
  let component: ChildLesson4;
  let fixture: ComponentFixture<ChildLesson4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLesson4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLesson4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
