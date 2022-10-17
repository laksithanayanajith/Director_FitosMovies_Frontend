import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import AOS from 'aos';
import { movieDTO, totalRatingDTO } from '../movie.module';
import { MoviesService } from '../movies.service';
import { LoginService } from 'src/app/Auth/login.service';

@Component({
  selector: 'app-index-movies',
  templateUrl: './index-movies.component.html',
  styleUrls: ['./index-movies.component.css']
})
export class IndexMoviesComponent implements OnInit {

  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute, private loginService: LoginService) { }

  viewmovie: movieDTO[] = [];
  total_rating: totalRatingDTO | any = 0;
  movieid!: number;

  ngOnInit(): void {
    AOS.init();
    this.DisplayMovieByDirectorId();
    //this.DisplayAllMovies();
  }

  DisplayMovieByDirectorId(){
    this.movieService.getMovieByDirectorID(this.loginService.getcurrentDirectorId()).subscribe((movie: movieDTO[]) =>{
      this.viewmovie = movie;
      console.log(movie);
    });
  }
  
  DisplayAllMovies(): void{
    this.movieService.getAllMovies().subscribe((movie: movieDTO[])=>{
      this.viewmovie = movie;
      console.log(movie);
    })
  }

  DisplayTotalRatingByMovieId(id: number): void{
    this.movieService.getTotalRatingByMovieID(id).subscribe((total_rating: totalRatingDTO)=>{
      this.total_rating = total_rating;
      

      Swal.fire({
        title: total_rating + ' ' + 'reviews!',
        text: 'This movie is growing up!',
        imageUrl: 'https://i.pinimg.com/originals/68/8e/9e/688e9eb45c2f5cc82361d5c305ccc0ca.gif',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
      console.log(total_rating);
    })
  }

  DeleteMovie(id: number): void{
    this.movieService.delete(id).subscribe(()=>{
      this.DisplayAllMovies();
    })
  }

  viewnow(name: string, year: number, description: any, poster: any){
    Swal.fire({
      title: name + ' | ' + year,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
        },
      text: description,
      imageUrl: poster,
      imageWidth: 350,
      imageHeight: 550,
      imageAlt: name,
    })
  }

}

