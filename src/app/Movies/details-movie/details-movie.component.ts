import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IndexMoviesComponent } from '../index-movies/index-movies.component';
import { movieDTO } from '../movie.module';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit, AfterViewInit {

  constructor(private movieService: MoviesService) { }

  viewmovie: movieDTO[]=[];

  ngOnInit(): void {
    this.DisplayAllMovies();
  }
  
  DisplayAllMovies(): void{
    this.movieService.getAllMovies().subscribe((movie: movieDTO[])=>{
      this.viewmovie = movie;
      console.log(movie);
    })
  }

  @ViewChild(IndexMoviesComponent) index_movie: number | any;

  ngAfterViewInit(){
    alert(this.index_movie?.getmovieid());
  }

}
