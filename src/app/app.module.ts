import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { HometileComponent } from './components/hometile/hometile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddCastToMovieComponent } from './components/add-cast-to-movie/add-cast-to-movie.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';
import { CasthometileComponent } from './components/casthometile/casthometile.component';
import { UpdateCastComponent } from './components/update-cast/update-cast.component';
import { AddCastComponent } from './components/add-cast/add-cast.component';
import { WatchComponent } from './components/watch/watch.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieHomeComponent,
    AddMoviesComponent,
    HometileComponent,
    AddCastToMovieComponent,
    UpdateMovieComponent,
    CasthometileComponent,
    UpdateCastComponent,
    AddCastComponent,
    WatchComponent,
    FooterComponent,
    CommentsComponent,
    SubscriptionComponent
  ],
  exports: [AppComponent], 
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
