import { Component } from '@angular/core';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.component.html',
  styleUrl: './question9.component.css'
})
export class Question9Component {
  user = {
    name: '',
    email: '',
    password: '',
    gender: '',
    country: '',
  };

  countries = ['India', 'USA', 'UK', 'Canada'];

  onSubmit() {
    console.log(this.user);
  }
}