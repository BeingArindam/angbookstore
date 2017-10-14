import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './share/filter.pipe';
import { HomeComponent } from './home/home.component';
import { BooksService } from './service/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    FilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'booklist', component: BooklistComponent }
    ])
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
