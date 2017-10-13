import { Component, OnInit } from '@angular/core';
import {Ibook} from './ibook';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books:Ibook[];
  constructor() { }

  ngOnInit() {
  this.books = [
    {
        "isbn": "978143022757",
        "name": "Pro Python",
        "author": "Marty Alchin",
        "publisher": "Apress",
        "price": 18.45,
        "url": "http://www.bookstore.com/propython",
        "releaseDate": 1507366745900
    },
    {
        "isbn": "1298549383376",
        "name": "Java Persistence API",
        "author": "Gavin King",
        "publisher": "Manning",
        "price": 23.45,
        "url": "http://www.bookstore.com/jpa",
        "releaseDate": 1507366745900
    },
    {
        "isbn": "978144930535",
        "name": "Jenkins: The Definitive Guide",
        "author": "John Ferguson Smart",
        "publisher": "O'Reilly",
        "price": 31.95,
        "url": "http://www.bookstore.com/jenkins",
        "releaseDate": 1507366745900
    },
    {
        "isbn": "312854438653",
        "name": "Spring Franework",
        "author": "Rod Johnson",
        "publisher": "McGraw Hill",
        "price": 32.95,
        "url": "http://www.bookstore.com/sf",
        "releaseDate": 1507366745900
    }
]

  }

}
