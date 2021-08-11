
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/models/article';
import { Category } from 'src/models/category';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
article!:Article;
category!:Category;
  constructor(public articleService:ArticleService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(response=>{
      this.articleService.loading=true;
      let id=Number(this.activatedRoute.snapshot.paramMap.get("id"))
      this.articleService.getArticle(id).subscribe(data=>{
        this.article=data;
        this.category=data.category;
      })
    })
  }

}
