import { Component } from '@angular/core';
import { ChildLesson4, ItemDetails } from '../child-lesson-4/child-lesson-4';

@Component({
  selector: 'app-parent-lesson-4',
  imports: [ChildLesson4],
  templateUrl: './parent-lesson-4.html',
  styleUrl: './parent-lesson-4.css',
})
export class ParentLesson4 {
  itemDetails: ItemDetails = {name:'', company: '', description: '', price: 0, discountpercent: 0};
  electricalItems: ItemDetails[] = [{name:'leptop', company: 'Dell', description: 'High-performance laptop', price: 5000, discountpercent: 10},
                   {name:'headphones', company: 'Sony', description: 'Wireless headphones', price: 300, discountpercent: 5},
                   {name:'mouse', company: 'Logitech', description: 'Ergonomic mouse', price: 100, discountpercent: 0},
                   {name:'keyboard', company: 'Corsair', description: 'Mechanical keyboard', price: 200, discountpercent: 15},
                   {name:'monitor', company: 'Samsung', description: '4K monitor', price: 1000, discountpercent: 20},
                   {name:'printer', company: 'HP', description: 'Color printer', price: 800, discountpercent: 10},
                  {name:'bluetooth speaker', company: 'JBL', description: 'Portable Bluetooth speaker', price: 150, discountpercent: 5},];

}
