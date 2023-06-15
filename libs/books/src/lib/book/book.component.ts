import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book.interface';
import {NgIf} from "@angular/common";
import {ButtonComponent} from "@bmc/ui";

@Component({
  selector: 'bmc-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, ButtonComponent]
})
export class BookComponent {
  @Input({ required: true }) book?: Book;
  @Output() addToCart = new EventEmitter<Book>();

  addToCartHandler(){
    this.addToCart.emit(this.book);
  }

}
