import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  score = 0;
  constructor(private router:Router,active_router :ActivatedRoute) {
    active_router.params.subscribe(params => {
      this.score = params['score'];
    });
    this.router.navigate(['/result/0']);
   }
   
  ngOnInit(): void {
  }

}
