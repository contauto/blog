import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Category } from 'src/models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl:string="https://localhost:44320/api/Categories";
  constructor(private httpClient:HttpClient) { }

  public getCategories(){
    return this.httpClient.get<Category[]>(this.apiUrl);
  }

  public getCategoriesById(id:number){
    let url:string=this.apiUrl+"/"+id
    return this.httpClient.get<Category[]>(url);
  }

}
