import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ButtonComponent} from './material/button/button.component';
import {TypographyComponent} from './material/typography/typography.component';
import {ButtonToggleComponent} from './material/button-toggle/button-toggle.component';
import {IconComponent} from './material/icon/icon.component';
import {BadgesComponent} from './material/badges/badges.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'toggle', component: ButtonToggleComponent},
  {path: 'icon', component: IconComponent},
  {path: 'badges', component: BadgesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
