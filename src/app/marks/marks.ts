import { Component } from '@angular/core';

interface Mark {
  subject: string;
  mark: number;
}

@Component({
  selector: 'app-marks',
  templateUrl: './marks.html',
  styleUrl: './marks.css',
})
export class Marks {
  /** ציון מינימלי למעבר */
  readonly passMark = 60;

  /** האם המשתמש מחובר (בהמשך יוחלף בבדיקת הרשאות אמיתית) */
  isConnected = true;
  

  marks: Mark[] = [
    { subject: 'Math', mark: 95 },
    { subject: 'Science', mark: 57 },
    { subject: 'History', mark: 92 },
    { subject: 'English', mark: 85 },
    { subject: 'Grammar', mark: 97.3 },
  ];
    /** ממוצע הציונים */
  get avg(): number {
    let sum = 0;                       // 1. מתחילים מאפס

    for (const m of this.marks) {      // 2. עוברים על כל ציון
      sum += m.mark;                   // 3. מוסיפים לסכום
    }

    if (this.marks.length === 0) return 0;  // 4. הגנה מפני חלוקה באפס
    return sum / this.marks.length;    // 5. סכום ÷ מספר הציונים
  }
}

