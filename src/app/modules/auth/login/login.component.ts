import { Component, DestroyRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regular_login, regular_password } from '../../shared/functions/regular_expressions';
import { TuiValidationError } from '@taiga-ui/cdk';
import { getHint } from '../../shared/functions/hint_form';


@Component({
  selector: 'chat-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  public login_form = new FormGroup({
    login: new FormControl<string>("", [Validators.required,Validators.maxLength(20),Validators.minLength(3), Validators.pattern(regular_login)]),
    password: new FormControl<string>("",[Validators.required,Validators.maxLength(20),Validators.minLength(8),Validators.pattern(regular_password)])
  });

  ngOnInit() {
  }

  get showHint(): boolean {
    return this.login_form.touched && this.login_form.status === "INVALID";
  }

  get loginError(): TuiValidationError | null {
    let hint = getHint({control:this.login_form.controls.login, minLength:3, maxLength:20, pattern:"Некорректный логин, пример, login2022-5_5"});
    let error = null;
    hint ? error = new TuiValidationError(hint): error = null;
    return error;
  }

  get passwordError(): TuiValidationError | null {
    let hint = getHint({control:this.login_form.controls.password, minLength:8, maxLength:20, pattern:"Пароль должен содержать хотя бы одну заглавную букву и цифру"});
    let error = null;
    hint ? error = new TuiValidationError(hint): error = null;
    return error;
  }

  public onLogin() {
    this.login_form.markAsTouched();
    console.log(this.login_form)
  }
}
