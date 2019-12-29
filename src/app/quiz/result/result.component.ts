import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  score = 0;
  constructor(private router:Router,active_router :ActivatedRoute) {
    active_router.params.subscribe(params => {
      this.score = params['score'];
    });
   }
  ngOnInit(): void {
  }

}
