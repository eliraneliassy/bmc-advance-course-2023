import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { AuthQuery, AuthService } from '@bmc/auth-state';
import { CartService } from '@bmc/cart-bl';
import {combineLatest, map, Observable} from 'rxjs';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'marketplace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgIf]
})
export class HeaderComponent {

  numOfItemsInCart$: Observable<number> = this.cartService.numberOfItemsInCart$;

  userName$: Observable<string | null> = this.authQuery.selectUserName$;

  viewObs$ = combineLatest([this.numOfItemsInCart$, this.userName$])
    .pipe(
      map(([numOfItems, userName]: [number, string | null]) => ({numOfItems, userName}))
    )


  constructor(private cartService: CartService, private authQuery: AuthQuery) {

  }

}
