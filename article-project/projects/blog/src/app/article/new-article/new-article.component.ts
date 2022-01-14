import { Component, OnInit } from '@angular/core';
import { CreateArticleRequest } from '../../models/create-article-request';
import { ArticleApiService } from '../services/article-api.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  title = ""
  content= ""
  author = ""
  constructor(
    private articleAPISvc: ArticleApiService
  ) { }

  ngOnInit(): void {
  }

  createNewArticle(){
    console.log(this.title)

    let request = new CreateArticleRequest(this.title, this.content, this.author)
    this.articleAPISvc.createArticle(request).subscribe((article)=> {
      console.log("[INFO]")
      console.log(article);
    });
  }

}
