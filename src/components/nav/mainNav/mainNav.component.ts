import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-mainNav',
  templateUrl: './mainNav.component.html',
  styleUrls: ['./mainNav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
