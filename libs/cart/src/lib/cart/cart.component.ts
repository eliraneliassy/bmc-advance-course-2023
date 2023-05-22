import { CartService } from '@bmc/cart-bl';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from '@bmc/books';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'bmc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cart$?: Observable<Book[]> = this.cartService.getCart();
  constructor(private cartService: CartService) {
    
  }
}
