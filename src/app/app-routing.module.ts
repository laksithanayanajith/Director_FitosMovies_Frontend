import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { LoginComponent } from './Auth/Login/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { CreateMovieComponent } from './Movies/create-movie/create-movie.component';
import { DetailsMovieComponent } from './Movies/details-movie/details-movie.component';
import { EditMovieComponent } from './Movies/edit-movie/edit-movie.component';
import { IndexMoviesComponent } from './Movies/index-movies/index-movies.component';
import { PageNotFoundComponent } from './Utilities/page-not-found/page-not-found.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch:"full"},
  {path: 'home', component: HomeComponent},

  {path: 'login', component: LoginComponent},

  {path: 'movie', component: IndexMoviesComponent, canActivate: [AuthGuard] },
  {path: 'movie/details', component: DetailsMovieComponent, canActivate: [AuthGuard] },
  {path: 'addnew', component: CreateMovieComponent, canActivate: [AuthGuard] },
  {path: 'movie/edit/:id', component: EditMovieComponent, canActivate: [AuthGuard] },

  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
