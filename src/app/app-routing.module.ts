import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'main', component: UserViewComponent},
  {path: 'profile', component:ProfileComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
