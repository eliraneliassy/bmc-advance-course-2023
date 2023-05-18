import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'bmc-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input({ required: true }) book?: Book;
  @Output() addToCart = new EventEmitter<Book>();

  addToCartHandler(){
    this.addToCart.emit(this.book);
  }

}
