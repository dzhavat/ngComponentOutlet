import { CommonModule } from '@angular/common';
import { Component, Injector, Input, NgModule } from '@angular/core';
import { disabledAttributeToken } from './disabled-attribute-token';

import {
  PrimaryButtonComponent,
  PrimaryButtonModule,
} from './primary/primary-button.component';
import {
  SecondaryButtonComponent,
  SecondaryButtonModule,
} from './secondary/secondary-button.component';

@Component({
  selector: 'base-button',
  templateUrl: './base-button.component.html',
})
export class BaseButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;

  get buttonComponentType() {
    return this.type === 'primary'
      ? PrimaryButtonComponent
      : SecondaryButtonComponent;
  }

  get buttonComponentInjector() {
    return Injector.create({
      providers: [
        {
          provide: disabledAttributeToken,
          useValue: this.disabled,
        },
      ],
      parent: this.injector,
    });
  }

  constructor(private injector: Injector) {}
}

@NgModule({
  declarations: [BaseButtonComponent],
  exports: [BaseButtonComponent],
  imports: [CommonModule, PrimaryButtonModule, SecondaryButtonModule],
})
export class BaseButtonModule {}
