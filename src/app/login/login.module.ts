import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './paginas/log/log.component';



@NgModule({
  declarations: [LoginComponent, LogComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
