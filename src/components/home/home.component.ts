import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/models/article';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
page:number=1;
articles:Article[]=[];
totalCount:number=0;
pageSize:number=6;
loadingItem:number=6;
ajax: any;

  constructor(private articleService:ArticleService,private router:Router,private activatedRoute:ActivatedRoute) { }
  ngOnDestroy(): void {
    if(this.ajax!=null){
      this.ajax.unsubscribe();
    }
  }

  ngOnInit() {
this.activatedRoute.paramMap.subscribe(response=>{
  if(response.get("page")){
    this.page=Number(response.get("page"));
  }
  if(this.totalCount>0){
    if(this.totalCount>=this.page*this.pageSize){
      this.loadingItem=6;
    }
    else{
      this.loadingItem=this.totalCount-((this.page-1)*this.pageSize)
    }
  }
  this.articles=[];
  this.totalCount=0;
  this.ajax=this.articleService.getArticles(this.page,this.pageSize).subscribe(data=>{
    this.articles=data.articles;
    this.totalCount=data.totalCount;
  })
})
  }

}
