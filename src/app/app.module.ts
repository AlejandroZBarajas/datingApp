import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    UserViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule,
    SharedmoduleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
