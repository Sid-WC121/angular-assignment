import { Component } from '@angular/core';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrl: './question7.component.css'
})
export class Question7Component {
  students = [
    { name: 'Amit', semester: 'S7 ECE' },
    { name: 'Arun', semester: 'S7 EAC' },
    { name: 'Akhil', semester: 'S7 EAC' }
  ].sort((a, b) => a.name.localeCompare(b.name));
}
