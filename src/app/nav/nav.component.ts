import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

declare var navSlide: any;


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
   navSlide();
  }




}
