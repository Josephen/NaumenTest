import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../services/article.service';
import { IArticle } from '../../article';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  constructor(private articleService: ArticleService) { }

  searchQuery = '';
  articles: any[] = [];
  searchQueryCollection: string[] = [];
  suggestions: string[] = [];
  typeahead: FormControl = new FormControl();
  showSuggestions;


  static getUrl(searchQuery: string) {
    return 'https://ru.wikipedia.org/w/api.php?action=opensearch&profile=normal&search='
      + searchQuery + '&limit=20&namespace=0&format=json&origin=*';
  }

  ngOnInit() {
  }

  showArticles() {
    this.articleService.getArticles(SearchComponent.getUrl(this.searchQuery))
      .subscribe(
        (data: IArticle) => {
          this.articles = Object.values({ ...data });
          this.searchQueryCollection.push(this.searchQuery);
        }
      );
  }

  showArticlesKeyup(event) {
    if (event.key === 'Enter' && this.searchQuery.trim() !== '') {
      this.showArticles();
    }
  }


}
