import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Ibook } from '../booklist/ibook';
import { Observable } from 'rxjs'
import { Response } from '@angular/http'

@Injectable()
export class BooksService {
  private api_url:string = "http://172.17.0.3:8080/bookstore/api/books";
  constructor(private http: HttpClient) {
}
  getAllBooks():Observable<Ibook[]>{
   return this.http.get('http://172.17.0.3:8080/bookstore/api/books');
  }
}
