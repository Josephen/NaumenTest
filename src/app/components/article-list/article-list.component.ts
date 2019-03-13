import { Component, Input, OnInit } from '@angular/core';

import { IArticleInfo, IArticleInfoArray } from '../../articleInfo';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  @Input() ArticleList;

  articleInfo: IArticleInfoArray;
  articleTitles: string[];

  static getUrlInfo(searchQuery: string) {
    return 'https://ru.wikipedia.org/w/api.php?action=query&titles='
      + searchQuery + '&prop=info&format=json&origin=*';
  }

  ngOnInit() {
  }

  getArticlesTitle() {
    this.articleTitles = this.ArticleList[1];
  }


}
