import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import {ButtonModule} from "@bmc/ui";

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [BookComponent],
  exports: [BookComponent],
})
export class BooksModule {}
