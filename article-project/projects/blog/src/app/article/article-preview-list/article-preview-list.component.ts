import { Component, OnInit } from '@angular/core';
import { ArticlePreview } from '../../models/article-preview'
import { ArticleApiService } from '../services/article-api.service';
import { LoggerService } from '../services/logger.service';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-preview-list',
  templateUrl: './article-preview-list.component.html',
  styleUrls: ['./article-preview-list.component.css']
})
export class ArticlePreviewListComponent implements OnInit {
  counter: number = 0;
  articles: Article[] = [];
  message: string = "ArticlePreviewListComponent"

  constructor(
    private articleAPISvc: ArticleApiService,
    private logSvc: LoggerService
  ) { }

  ngOnInit(): void {
    this.addDefaultArticles();
    this.logSvc.log(this.message);
    
  }

  addDefaultArticles(){
    this.articleAPISvc.getArticle().subscribe((articleList)=>{
      console.log("[INFO]")
      console.log(articleList)
      this.articles = articleList
    })
  }

  addCounterEvent(num: number) {
    this.counter += num;
  }
}
