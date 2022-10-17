import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movieCreationDTO } from '../movie.module';
import { MoviesService } from '../movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private router: Router, private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  saveChanges(movieCreationDTO: movieCreationDTO){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'New Movie Added Successfully!',
      showConfirmButton: false,
      timer: 1500
    })
    this.moviesService.create(movieCreationDTO).subscribe(()=>{
      console.log(movieCreationDTO);
      this.router.navigate(['/movie']);
    });
  }
}
