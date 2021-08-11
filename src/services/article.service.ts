import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticlePg } from 'src/models/articlePg';
import { tap } from "rxjs/operators";
import { Article } from 'src/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }
  public loading!: boolean;
  private apiUrl: string = "https://localhost:44320/api/Articles"
  getArticles(page: number, pageSize: number) {
    let url: string = this.apiUrl + "/" + page + "/" + pageSize;
    return this.httpClient.get<ArticlePg>(url).pipe(tap(x => {
      this.loading = false;
    }));
  }
  getArticle(id: number) {

    let url: string = this.apiUrl + "/" + id;
    return this.httpClient.get<Article>(url).pipe(tap(x=>{
      this.loading=false;
    }))
  }
  getArticlesByCategory(categoryId:number,page:number,pageSize:number){
    let url: string = this.apiUrl +"/GetArticlesByCategory/"+categoryId+"/" + page + "/" + pageSize;
    return this.httpClient.get<ArticlePg>(url).pipe(tap(x=>{
      this.loading=false;
    }));
  }
}
