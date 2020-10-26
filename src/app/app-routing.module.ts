import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AnimationsComponent } from './views/animations/animations.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'animations', component: AnimationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
