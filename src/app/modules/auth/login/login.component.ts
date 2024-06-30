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
    password: new FormControl<string>("",[Validators.required,Validators.max(20),Validators.min(8),Validators.pattern(regular_password)])
  });

  ngOnInit() {
  }

  get loginError(): TuiValidationError | null {
    let hint = getHint({control:this.login_form.controls.login, minLength:3, maxLength:20});
    let error = null;
    hint ? error = new TuiValidationError(hint): error = null;
    return error;
  }

  public onLogin() {
    console.log(this.login_form)
  }
}
