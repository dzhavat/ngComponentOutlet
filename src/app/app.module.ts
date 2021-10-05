import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BaseButtonModule } from './button/base-button.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NoopAnimationsModule, FormsModule, BaseButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
