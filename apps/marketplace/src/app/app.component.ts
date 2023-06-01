
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'marketplace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  slides = [
    'https://cdn.wallpapersafari.com/72/58/WLHYwR.jpg',
    'https://e1.pxfuel.com/desktop-wallpaper/186/453/desktop-wallpaper-fresh-for-widescreen-fullscreen-beautiful-full-screen-nature.jpg',
    'data:image/jpeg;base64,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'
  ]

  names = [
    'Eliran',
    'Chen',
    'Yan',
    'Fuad'
  ];




}
