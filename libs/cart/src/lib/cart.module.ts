import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cartRoutes } from './lib.routes';
import { CartComponent } from './cart/cart.component';
import { BooksModule } from '@bmc/books';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(cartRoutes), BooksModule],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartModule {}
