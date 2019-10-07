import {NgModule} from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import { BadgesComponent } from './badges/badges.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {CommonModule} from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const components: Array<any> = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [ButtonComponent, TypographyComponent, ButtonToggleComponent, IconComponent, BadgesComponent, SpinnerComponent, ToolbarComponent, SideNavComponent],
  imports: [components, CommonModule],
  exports: [components]
})
export class MaterialModule { }
