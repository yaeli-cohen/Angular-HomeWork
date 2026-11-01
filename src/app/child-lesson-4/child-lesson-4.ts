import { Component, Input } from '@angular/core';

export type ItemDetails = {
  name: string;
  company: string;
  description: string;
  price: number;
  discountpercent: number;
};


@Component({
  selector: 'app-child-lesson-4',
  imports: [],
  templateUrl: './child-lesson-4.html',
  styleUrl: './child-lesson-4.css',
})
export class ChildLesson4 {
  /** כל הפריטים - מקבל מהאב */
  @Input() electricalItems: ItemDetails[] = [];

  /** הפריט הנבחר - מקבל מהאב */
  @Input() selectedItem: ItemDetails = { name: '', company: '', description: '', price: 0, discountpercent: 0 };
}
