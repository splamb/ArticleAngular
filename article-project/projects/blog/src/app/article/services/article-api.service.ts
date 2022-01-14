import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ArticlePreview } from "../../models/article-preview";
import { PingResponse } from "../../models/pingResponse";
import { HttpClient } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { Article } from "../../models/Article";
import { CreateArticleRequest } from "../../models/create-article-request";

@Injectable()
export class ArticleApiService {
    constructor(
        private httpClient: HttpClient
    ){

    }

    getAllArticles(): ArticlePreview[] {
        var articles: ArticlePreview[] = [];

        articles.push(new ArticlePreview("Article 1", "This is the summary of an article."))
        articles.push(new ArticlePreview("Article 2", "This is the summary of an article."))
        articles.push(new ArticlePreview("Article 3", "This is the summary of an article."))
        articles.push(new ArticlePreview("Article 4", "This is the summary of an article."))

        return articles;
    }

    getPingStatus(): Observable<PingResponse> {
        return this.httpClient.get<PingResponse>("");
    }

    getArticle(): Observable<Article[]> {
        return this.httpClient.get<Article[]>("https://localhost:44380/articles/list")
    }

    createArticle(request: CreateArticleRequest): Observable<Article> {
        return this.httpClient.post<Article>("https://localhost:44380/articles/new", request)
    }
}