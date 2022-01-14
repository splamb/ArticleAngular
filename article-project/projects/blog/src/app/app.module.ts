import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { ArticlePreviewComponent } from './article/article-preview/article-preview.component';
import { ArticlePreviewListComponent } from './article/article-preview-list/article-preview-list.component';
import { ArticlePageComponent } from './article/article-page/article-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleModule } from './article/article.module';
import { ArticleApiService } from './article/services/article-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewArticleComponent } from './article/new-article/new-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    HomePageComponent,
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ArticleApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
