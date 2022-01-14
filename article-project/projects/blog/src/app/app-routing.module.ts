import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from './article/article-page/article-page.component';
import { ArticlePreviewListComponent } from './article/article-preview-list/article-preview-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent},
  { path: "article/:name", component: ArticlePageComponent},
  { path: "articles", component: ArticlePreviewListComponent },
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
