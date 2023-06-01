import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './lib.routes';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from "@bmc/ui";

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
  ButtonModule],

  declarations: [LoginComponent],
})
export class AuthModule {}
