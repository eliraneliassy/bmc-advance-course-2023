import {AfterViewInit, ChangeDetectionStrategy, Component, Inject, Input, NgModule, TemplateRef} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {ButtonModule} from "../button/button.module";

@Component({
  selector: 'b-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements  AfterViewInit{
  @Input() slides: string[] = [];

  @Input() slidesTemplate?: TemplateRef<any>;

  slidesPositions: number[] = [];
  currentIndex = 0;

  navigation = {
    next: () => this.slide(1),
    prev: () => this.slide(-1)
  }

  constructor( @Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    this.document.querySelectorAll<HTMLDivElement>('.slide').forEach((slide) =>
      this.slidesPositions.push((slide.offsetLeft)));

    console.log(this.slidesPositions)
  }


  slide(direction: -1 | 1 ): void {
    this.currentIndex+=direction;

    if(this.currentIndex > this.slidesPositions.length -1 ) { this.currentIndex = 0}
    if(this.currentIndex < 0) {this.currentIndex = this.slidesPositions.length - 1}

    this.document.querySelector<HTMLDivElement>('.slider')?.scrollTo({
      left: this.slidesPositions[this.currentIndex],
      behavior: 'smooth'
    })
  }


}

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [SliderComponent],
  exports: [SliderComponent],
})
export class SliderModule {}
