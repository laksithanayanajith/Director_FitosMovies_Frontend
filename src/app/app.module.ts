import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './Material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateMovieComponent } from './Movies/create-movie/create-movie.component';
import { DetailsMovieComponent } from './Movies/details-movie/details-movie.component';
import { EditMovieComponent } from './Movies/edit-movie/edit-movie.component';
import { FormMovieComponent } from './Movies/form-movie/form-movie.component';
import { IndexMoviesComponent } from './Movies/index-movies/index-movies.component';
import { MenuComponent } from './Menu/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DarkModeToggleComponent } from './Utilities/dark-mode-toggle/dark-mode-toggle.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Auth/Login/login/login.component';
import { PageNotFoundComponent } from './Utilities/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    DetailsMovieComponent,
    EditMovieComponent,
    FormMovieComponent,
    IndexMoviesComponent,
    MenuComponent,
    DarkModeToggleComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    CoolSocialLoginButtonsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
