import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IArticle } from '../article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles (url) {
    return this.http.get<IArticle>(url);
  };
}
