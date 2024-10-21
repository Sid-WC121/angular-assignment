import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { Question8Component } from './question8/question8.component';
import { Question9Component } from './question9/question9.component';
import { Question10Component } from './question10/question10.component';

const routes: Routes = [
  { path: 'question1', component: Question1Component },
  { path: 'question2', component: Question2Component },
  { path: 'question3', component: Question3Component },
  { path: 'question4', component: Question4Component },
  { path: 'question5', component: Question5Component },
  { path: 'question6', component: Question6Component },
  { path: 'question7', component: Question7Component },
  { path: 'question8', component: Question8Component },
  { path: 'question9', component: Question9Component },
  { path: 'question10', component: Question10Component },
  { path: '', redirectTo: '/question1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

