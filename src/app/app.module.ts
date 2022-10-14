import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiLinkModule,
  TuiButtonModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  TuiActionModule,
  TuiAvatarModule, TuiCheckboxLabeledModule,
  TuiIslandModule,
  TuiProgressModule,
  TuiRatingModule,
  TuiTextAreaModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RateDialogComponent } from './components/rate-dialog/rate-dialog/rate-dialog.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    RateDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiActionModule,
    TuiIslandModule,
    TuiLinkModule,
    TuiProgressModule,
    TuiAvatarModule,
    TuiRatingModule,
    FormsModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    TuiCheckboxLabeledModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
