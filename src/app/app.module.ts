import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BaseButtonModule } from './button/base-button.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, FormsModule, BaseButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
