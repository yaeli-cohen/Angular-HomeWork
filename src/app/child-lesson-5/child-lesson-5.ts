import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-lesson-5',
  imports: [NgStyle],
  templateUrl: './child-lesson-5.html',
  styleUrl: './child-lesson-5.css',
})
export class ChildLesson5 {
  seconds: number = 0;
  timer: any;
  startButtonColor = 'lightblue';

  startTimer() {
    this.seconds = 0;
    this.startButtonColor="yellow";
    this.timer = setInterval(() => {
    //  console.log(this.seconds);
      this.seconds++;

    }, 1000);
  }
  
 @Output() secondsChanged = new EventEmitter<number>();
  sendToParent() {
      this.startButtonColor = 'lightblue';
    clearInterval(this.timer);
    this.secondsChanged.emit(this.seconds);
 
  }
}