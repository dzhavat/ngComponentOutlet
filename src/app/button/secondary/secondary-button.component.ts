import { Component, Inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { disabledAttributeToken } from '../disabled-attribute-token';

@Component({
  selector: 'secondary-button',
  template: `<button mat-stroked-button color="primary" [disabled]="isDisabled">
    <ng-content></ng-content>
  </button>`,
})
export class SecondaryButtonComponent {
  constructor(@Inject(disabledAttributeToken) public isDisabled: boolean) {}
}

@NgModule({
  declarations: [SecondaryButtonComponent],
  imports: [MatButtonModule],
})
export class SecondaryButtonModule {}
