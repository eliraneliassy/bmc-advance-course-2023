import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book, BooksService } from '@bmc/books';
import { CartService } from '@bmc/cart-bl';
import { Observable } from 'rxjs';

@Component({
  selector: 'bmc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  books$?: Observable<Book[]>;
  constructor(private booksService: BooksService, private cartService: CartService) {

  }
  ngOnInit(): void {
    this.books$ = this.booksService.getBooks('Angular');
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
