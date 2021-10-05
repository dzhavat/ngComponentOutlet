import { Component, Inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { disabledAttributeToken } from '../disabled-attribute-token';

@Component({
  selector: 'primary-button',
  template: `<button mat-flat-button color="primary" [disabled]="isDisabled">
    <ng-content></ng-content>
  </button>`,
})
export class PrimaryButtonComponent {
  constructor(@Inject(disabledAttributeToken) public isDisabled: boolean) {}
}

@NgModule({
  declarations: [PrimaryButtonComponent],
  imports: [MatButtonModule],
})
export class PrimaryButtonModule {}
