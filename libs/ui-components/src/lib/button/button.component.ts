import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'b-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ButtonComponent {
  @Input() text = ''

  @Output() clicked = new EventEmitter<void>();

  clickHanlder() {
    this.clicked.emit();
  }
}
