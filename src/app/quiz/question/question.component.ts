import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  QUIZES :string[] = ['Java','C','Javascript'];
  all_question =
  {
    C:[
      {
        text:'In Solid priciewrweple , O stands for:',
        answer:0,
        chklist:[
          'Object ansafasfd Variables',
          'Open Closed Priciple',
        ]
      },{
        text:'In Solid pricewrweriple , O stands for:',
        answer:1,
        chklist:[
          'Open Closed Priciple',
          'Object anasfasfasd Variables',
        ]
      },
    ],
    Java:[
      {
        text:'In Solid priciewrewple , O stands for:',
        answer:2,
        chklist:[
          'ansafsafasd Variables',
          'Open Closed Priciple',
          'dsfsfdsf'
        ]
      },
      {
        text:'In Solid priciewrweple , O stands for:',
        answer:0,
        chklist:[
          'Object ansafasfd Variables',
          'Open Closed Priciple',
        ]
      },
    ],
    Javascript:[
      {
        text:'In Solid pricewrweriple , O stands for:',
        answer:1,
        chklist:[
          'Open Closed Priciple',
          'Object anasfasfasd Variables',
        ]
      },{
        text:'In Solid priciewrewple , O stands for:',
        answer:2,
        chklist:[
          'ansafsafasd Variables',
          'Open Closed Priciple',
          'dsfsfdsf'
        ]
      }
    ]
  }
  crnt_quiz = '';
  crnt_qid ;
  crnt_question;
  crnt_score ;
  questions = this.all_question.C;
  total_score = 0 ;
  total_quiz = 0;

  constructor(active_router :ActivatedRoute,private router :Router,private _snackBar: MatSnackBar) {
    active_router.params.subscribe(params => {
      this.crnt_quiz = params['quiz'];
      this.crnt_qid =  params['id'];
    });
    this.crnt_question = this.questions[this.crnt_qid];
    console.log(this.crnt_question)
  }
  go_page(to:string){
    this.questions = this.all_question[to];
    // this.crnt_qid = 0;
    this.crnt_question = this.questions[0];
    this.router.navigate(['/'+to+'/quiz/0']);
  }
  go_question(to:string) {

    if((this.crnt_score===null)&&(to==='prev'||to === 'next')){
      this._snackBar.open('You have to select anything', 'X', {duration: 2000,});
      return;
    }

    switch (to) {
      case 'frist':
        this.crnt_qid = 0;
        this.total_quiz = 0;
        this.total_score = 0;
        break;
      case 'last':
        this.crnt_qid = this.questions.length - 1;
        break;
      case 'next':
          this.crnt_qid++;
        break;
      case 'prev':
        if(!this.crnt_qid--){
          this.crnt_qid++;
        }
        break;
    }
    if((this.crnt_score!==null)&&(to === 'next')){
      if(this.crnt_question.answer === this.crnt_score){
        this.total_score += 10;
        this._snackBar.open('Right', 'X', {duration: 2000,});
      }else{
        this._snackBar.open('Wrong', 'X', {duration: 2000,});
      }
    }
    // this._snackBar.open(this.crnt_score, 'X', {duration: 2000,});
    this.crnt_question = this.questions[this.crnt_qid];
    this.crnt_score = null
    //finish quiz
    if(this.crnt_qid === this.questions.length){

      this.router.navigate(['/result/'+this.total_score/this.questions.length]);
      return;
    }
    this.router.navigate([this.crnt_quiz+'/quiz/'+this.crnt_qid]);
  }
  ngOnInit(): void {
  }

}

