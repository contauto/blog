import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-menuCategory',
  templateUrl: './menuCategory.component.html',
  styleUrls: ['./menuCategory.component.css']
})
export class MenuCategoryComponent implements OnInit {
categories:Category[]=[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response
    })
  }

}
