
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Book, BooksService} from '@bmc/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'bmcadnavcecourse2023-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  books$?: Observable<Book[]>;
  constructor(private booksService: BooksService) {
    
  }
  ngOnInit(): void {
    this.books$ = this.booksService.getBooks('Angular');
  }

  addToCart(book: Book){
    console.log('add to cart', book);
  }


}
