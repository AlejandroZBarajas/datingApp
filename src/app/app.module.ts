import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompanionViewComponent } from './pages/companion-view/companion-view.component';
import { AccompaniedViewComponent } from './pages/accompanied-view/accompanied-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanionViewComponent,
    AccompaniedViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
