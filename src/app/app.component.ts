import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <div>
      <label for="amountInput">Enter Amount:</label>
      <input type="number" id="amountInput" [(ngModel)]="amount" name="amount">
      <button (click)="minimizeNotes()">Minimize Notes</button>
    </div>

    <div *ngIf="notesBreakdown && notesBreakdown.size > 0">
      <h2>Notes Breakdown:</h2>
      <ul>
        <li *ngFor="let denomination of getNotesBreakdownKeys()">
          {{ denomination }} notes: {{ notesBreakdown.get(denomination) }}
        </li>
      </ul>
    </div>

    <div *ngIf="remainingAmount !== null">
      <h2>Remaining Amount as Change:</h2>
      <p>{{ remainingAmount }}</p>
    </div>
  `,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  styles: [`
    div {
      margin-bottom: 10px;
    }

    label {
      font-weight: bold;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 5px;
    }
  `]
})
export class AppComponent {
  title = 'Minimize Notes App'; // Application title
  amount: number = 0; // Amount entered by user
  notesBreakdown: Map<number, number> = new Map<number, number>(); // Map to store notes breakdown
  remainingAmount: number | null = null; // Remaining amount after minimizing notes

  // Function to minimize notes based on denominations
  minimizeNotes() {
    const denominations = [100, 50, 20, 10];
    const notesCount = new Map<number, number>();
    let amountToGive = this.amount;

    // Calculate number of notes for each denomination
    denominations.forEach(denomination => {
      if (amountToGive >= denomination) {
        const count = Math.floor(amountToGive / denomination);
        amountToGive -= count * denomination;
        notesCount.set(denomination, count);
      }
    });

    // Handle remaining amount as change
    this.remainingAmount = amountToGive > 0 ? amountToGive : null;

    // Update notesBreakdown by iterating over keys
    this.notesBreakdown.clear();
    notesCount.forEach((value, key) => {
      this.notesBreakdown.set(key, value);
    });
  }

  // Helper function to get keys from notesBreakdown for *ngFor
  getNotesBreakdownKeys(): number[] {
    return Array.from(this.notesBreakdown.keys());
  }
}
