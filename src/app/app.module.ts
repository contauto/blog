import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from 'src/components/home/home.component';
import { AboutMeComponent } from 'src/components/aboutMe/aboutMe.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { MainLayoutComponent } from 'src/layout/mainLayout/mainLayout.component';
import { AdminLayoutComponent } from 'src/layout/adminLayout/adminLayout.component';
import { MainNavComponent } from 'src/components/nav/mainNav/mainNav.component';
import { AdminNavComponent } from 'src/components/nav/adminNav/adminNav.component';
import { MenuCategoryComponent } from 'src/components/menuCategory/menuCategory.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageTitleComponent } from 'src/components/pageTitle/pageTitle.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticlesComponent } from 'src/components/articles/articles.component';
import { ArticleComponent } from 'src/components/article/article.component';
import { UrlFormatPipe } from 'src/pipes/urlFormat.pipe';
import { CategoryArticlesComponent } from 'src/components/categoryArticles/categoryArticles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    MainNavComponent,
    AdminNavComponent,
    MenuCategoryComponent,
    PageTitleComponent,
    ArticlesComponent,
    ArticleComponent,
    UrlFormatPipe,
    CategoryArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
