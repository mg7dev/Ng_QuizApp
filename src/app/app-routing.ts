import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';


import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./quiz/result/result.component";
import { QuestionComponent } from "./quiz/question/question.component";
const appRoutes: Route[] = [
  {
    path: '', children: [
      {path:'' , component: QuizComponent },
      { path: 'result/:score', component: ResultComponent},
      { path: ':quiz/quiz/:id', component: QuestionComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
