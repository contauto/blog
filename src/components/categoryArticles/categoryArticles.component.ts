import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/models/article';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-categoryArticles',
  templateUrl: './categoryArticles.component.html',
  styleUrls: ['./categoryArticles.component.css']
})
export class CategoryArticlesComponent implements OnInit {
page:number=1;
articles:Article[]=[];
totalCount:number=0;
pageSize:number=6;
loadingItem:number=6;
ajax: any;
  categoryId!: number;
  constructor(public articleService:ArticleService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.articleService.loading=true;
      this.articles=[];
      this.totalCount=0;
      if(params.get("id")){
        this.categoryId=Number(params.get("id"));
      }
      if(params.get("page")){
        this.page=Number(params.get("page"));
      }
      this.articleService.getArticlesByCategory(this.categoryId,this.page,this.pageSize).subscribe(data=>{
        this.articles=data.articles;
        this.totalCount=data.totalCount;
      })
    })
  }

}
