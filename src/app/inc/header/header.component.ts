import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements  OnInit {

  QUIZES :string[] = ['Java','C','Javascript'];
  go_page(to:string){
    this.router.navigate(['/'+to+'/quiz/0']);
  }
  constructor(private router :Router,){
    
  }
  ngOnInit() { }
  
}
export interface quiz {
  id:string,
  title:string
}
