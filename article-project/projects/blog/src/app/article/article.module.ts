import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleTempComponent } from './article-temp/article-temp.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ArticlePreviewListComponent } from './article-preview-list/article-preview-list.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { HeaderComponent } from '../header-component/header.component';
import { HomePageComponent } from '../home-page/home-page.component';
//import { NewArticleComponent } from './new-article/new-article.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticlePreviewComponent,
    ArticlePreviewListComponent,
    ArticlePageComponent,
    //NewArticleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ArticleModule { }
