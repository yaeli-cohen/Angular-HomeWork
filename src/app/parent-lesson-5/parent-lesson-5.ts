import { Component } from '@angular/core';
import { ChildLesson5 } from '../child-lesson-5/child-lesson-5';

@Component({
  selector: 'app-parent-lesson-5',
  imports: [ChildLesson5],
  templateUrl: './parent-lesson-5.html',
  styleUrl: './parent-lesson-5.css',
})
export class ParentLesson5 {

  receivedSeconds(seconds: number) {
    console.log('Received seconds from child:', seconds);
    alert('Received seconds from child: ' + seconds);
  }
}
