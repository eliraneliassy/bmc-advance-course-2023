import { CartService } from '@bmc/cart-bl';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Book, BookComponent} from '@bmc/books';
import { Observable, of } from 'rxjs';
import {AsyncPipe, NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'bmc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, BookComponent]
})
export class CartComponent {
  cart$?: Observable<Book[]> = this.cartService.getCart();
  constructor(private cartService: CartService) {

  }
}
