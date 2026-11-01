import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Marks } from './marks/marks';

@Component({
  imports: [FormsModule, Marks, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);

  title: string = "Access to install educational software on the computer";
  id: number | null = null;

  /** האם המשתמש אישר את התקנון */
  question = signal(false);

  /** נקרא בכל שינוי של התיבה ומעדכן את הסיגנל לערך המדויק שלה */
  onQuestionChange(event: Event): void {
    this.question.set((event.target as HTMLInputElement).checked);
  }

  checkTheCheckbox(): void {
    // TODO: כאן תבוא הפעולה שתרצה לבצע בלחיצה על "היכנס"
  }

  /** ניווט פנימי של Angular — לא טוען מחדש את הדף */
  goToParentLesson4(): void {
    if (this.question()) {
      void this.router.navigate(['/parent-lesson-4']);
    }
  }
}
