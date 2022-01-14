import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from '../article/services/article-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private apiSvc: ArticleApiService
  ) { }

  ngOnInit(): void {
    this.apiSvc.getPingStatus().subscribe((ping)=> {
      console.log("[INFO]")
      console.log(ping)
    })
  }

}
