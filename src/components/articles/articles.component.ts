import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/models/article';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input()
  totalCount!: number;
@Input() articles!:Article[];
@Input() page!:number;
@Input() pageSize!:number;
@Input() loadingItem!:number;
@Input()typeList!:string;
default_picture:string="assets/picture.jpeg"
  constructor(public articleService:ArticleService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

  this.articleService.loading=true;
  }

  createRange(){
    var items:number[]=[];
    for(var  i=1;i<=this.loadingItem;i++){
      items.push(i);
    }
    return items;

  }

pageChange(event: any){
  this.articleService.loading=true;
  this.page=event;
  switch (this.typeList) {
    case "home":
    this.router.navigateByUrl('/sayfa/'+this.page)
      break;
    case "category":
  let categoryName=this.activatedRoute.snapshot.paramMap.get("name");
  let categoryId=this.activatedRoute.snapshot.paramMap.get("id");
  this.router.navigateByUrl("/kategori/"+categoryName+"/"+categoryId+"/sayfa/"+this.page)
    break;
    default:
      break;
  }
}


}
