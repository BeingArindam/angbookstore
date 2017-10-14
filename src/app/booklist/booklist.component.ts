import { Component, OnInit } from '@angular/core';
import { Ibook } from './ibook';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BooksService } from '../service/books.service'

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books: Ibook[];
  filterKey = "";
  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(data => {
    this.books = data;
    });
  }
}
