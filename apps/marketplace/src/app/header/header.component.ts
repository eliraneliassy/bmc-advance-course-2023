import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { CartService } from '@bmc/cart-bl';
import { Observable } from 'rxjs';

@Component({
  selector: 'marketplace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent  {

  numOfItemsInCart$?: Observable<number> = this.cartService.numberOfItemsInCart$;
  constructor(private cartService: CartService) {
    
  }
  
}
