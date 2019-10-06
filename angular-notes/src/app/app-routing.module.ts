import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ButtonComponent} from './material/button/button.component';
import {TypographyComponent} from './material/typography/typography.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'typography', component: TypographyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
