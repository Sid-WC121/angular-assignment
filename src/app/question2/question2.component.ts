import { Component } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrl: './question2.component.css'
})

export class Question2Component {
  students = [
    { name: 'Amit', semester: 'S7 ECE' },
    { name: 'Arun', semester: 'S7 EAC' },
    { name: 'Akhil', semester: 'S7 EAC' },
  ];
}
