import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiRootModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { LoginComponent } from './modules/auth/login/login.component';
import {TuiInputModule, TuiInputPasswordModule, tuiInputPasswordOptionsProvider, } from '@taiga-ui/kit';
import {TuiErrorModule} from '@taiga-ui/core';

const TUI_MODULES = [
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiInputModule,
  TuiTextfieldControllerModule,
  TuiInputPasswordModule,
  TuiButtonModule,
  TuiErrorModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...TUI_MODULES
  ],
  providers: [tuiInputPasswordOptionsProvider({
    icons: {
        hide: 'tuiIconUnlockLarge',
        show: 'tuiIconLockLarge',
    },
}),],
  bootstrap: [AppComponent]
})
export class AppModule { }
