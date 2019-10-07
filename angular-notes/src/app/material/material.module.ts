import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';

const components: Array<any> = [
  MatButtonModule,
  MatGridListModule,
];

@NgModule({
  declarations: [ButtonComponent, TypographyComponent],
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
