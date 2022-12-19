import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCastComponent } from './components/add-cast/add-cast.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { CasthometileComponent } from './components/casthometile/casthometile.component';
import { CommentsComponent } from './components/comments/comments.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { UpdateCastComponent } from './components/update-cast/update-cast.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';
import { WatchComponent } from './components/watch/watch.component';

const routes: Routes = [
  {path: '', component : MovieHomeComponent},
  {path:'comments',component:CommentsComponent},
  {path: 'movies', component : MovieHomeComponent},
  {path: 'add-movie', component : AddMoviesComponent},
  {path: 'app-update-movie/:id', component : UpdateMovieComponent},
  {path: 'casts', component : CasthometileComponent},
  {path: 'app-update-cast/:id', component : UpdateCastComponent},
  {path: 'app-add-cast', component : AddCastComponent},
  {path: 'link/:castId/:movieId', component : AddCastComponent},
  {path: 'watchvideo/:link/:id', component : WatchComponent},
  {path: 'app-subscription', component : SubscriptionComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
