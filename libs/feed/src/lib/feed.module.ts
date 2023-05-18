import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { feedRoutes } from './lib.routes';
import { FeedComponent } from './feed/feed.component';
import { BooksModule } from '@bmc/books';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(feedRoutes), BooksModule],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedModule {}
