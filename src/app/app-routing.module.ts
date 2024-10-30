import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompanionViewComponent } from './pages/companion-view/companion-view.component';
import { AccompaniedViewComponent } from './pages/accompanied-view/accompanied-view.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'companion', component:CompanionViewComponent},
  {path: 'accompanied', component:AccompaniedViewComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
