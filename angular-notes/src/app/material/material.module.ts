import {NgModule} from '@angular/core';
import {MatBadgeModule, MatButtonModule, MatButtonToggleModule, MatIconModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import { BadgesComponent } from './badges/badges.component';

const components: Array<any> = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatGridListModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [ButtonComponent, TypographyComponent, ButtonToggleComponent, IconComponent, BadgesComponent],
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
