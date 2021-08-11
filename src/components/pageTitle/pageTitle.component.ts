import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageTitle',
  templateUrl: './pageTitle.component.html',
  styleUrls: ['./pageTitle.component.css']
})
export class PageTitleComponent implements OnInit {
  @Input()title:string="";
  constructor() { }

  ngOnInit() {
  }

}
