import {ChangeDetectionStrategy, Component, ElementRef, Input, NgModule, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  ControlValueAccessor, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, NgControl,
  Validator,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'b-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: InputComponent
  //   },
  //   {
  //     provide: NG_VALIDATORS,
  //     useExisting: InputComponent
  //   }
  // ]
})
export class InputComponent implements ControlValueAccessor, Validator{
  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern = null;
  @Input() errorMsg: string | null = null;
  @Input() placeholder: string | null = null;

@ViewChild('input') input?: ElementRef<any>;
disabled = false;
constructor(protected controlDir: NgControl) {
  this.controlDir.valueAccessor = this;
}

  onChange() {}

  onTouch() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if(this.input) {
      this.input.nativeElement.disabled = isDisabled;
    }
  }

  writeValue(obj: any): void {
    if(this.input) {
      this.input.nativeElement.value = obj;
    }

  }

  validate(control: AbstractControl): ValidatorFn[] {
    const validators = control.validator ? [control.validator] : [];

    if(this.isRequired) {
      validators.push(Validators.required)
    }

    if(this.pattern){
      validators.push((Validators.pattern(this.pattern)));
    }

    return  validators
  }

}

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputModule {}
