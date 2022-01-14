import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/Article';
import { ArticlePreview } from '../../models/article-preview';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() content!: Article;
  // @Output() newEvent = new EventEmitter<number>();
  // updated: string = "5 minutes"
  // message: string = ArticlePreviewComponent.name

  // isLinkActive: boolean = true
  linkToArticle: string = `#`

  constructor(
    private logSvc: LoggerService
  ) { }

  ngOnInit(): void {
    this.linkToArticle = `/article/${this.content.title}`
    // this.logSvc.log(this.message);


  }

  // printArticleToConsole() {
  //   console.log(`Button for ${this.content.title}`)
  // }

  // triggerOutput(){
  //   this.newEvent.emit(1)
  // }

}
