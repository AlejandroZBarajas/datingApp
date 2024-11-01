import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { UserViewComponent } from './pages/user-view/user-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserModule,
    PostsModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
