import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompanionViewComponent } from './pages/companion-view/companion-view.component';
import { AccompaniedViewComponent } from './pages/accompanied-view/accompanied-view.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanionViewComponent,
    AccompaniedViewComponent,
    RegisterFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
