import { AuthService } from '@bmc/auth-state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {ButtonComponent} from "@bmc/ui";

@Component({
  selector: 'bmc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule]
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }
  form: FormGroup = new FormGroup({
    email: new FormControl('eliran@e-square.io')
  });

  login() {
    this.authService.login(this.form.value.email);
    this.router.navigateByUrl('/feed');
  }
}
