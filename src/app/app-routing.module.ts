import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'src/components/aboutMe/aboutMe.component';
import { ArticleComponent } from 'src/components/article/article.component';
import { CategoryArticlesComponent } from 'src/components/categoryArticles/categoryArticles.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { HomeComponent } from 'src/components/home/home.component';
import { AdminLayoutComponent } from 'src/layout/adminLayout/adminLayout.component';
import { MainLayoutComponent } from 'src/layout/mainLayout/mainLayout.component';

const routes: Routes = [{
  path: "",
  component: MainLayoutComponent,
  children: [{
    path: "",
    component: HomeComponent
  },
  {
    path: "sayfa/:page",
    component: HomeComponent
  },
  {
    path: "makale/:title/:id",
    component: ArticleComponent
  },
  {
    path:"kategori/:name/:id",
    component:CategoryArticlesComponent
  },
  {
    path:"kategori/:name/:id/sayfa/:page",
    component:CategoryArticlesComponent
  },
  {
    path: "hakkimda",
    component: AboutMeComponent
  },
  {
    path: "iletisim",
    component: ContactComponent
  },
  {
    path: "admin",
    component: AdminLayoutComponent
  }]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
