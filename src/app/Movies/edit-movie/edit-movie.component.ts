import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { movieCreationDTO, movieDTO } from '../movie.module';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private router: Router , private activateRoute: ActivatedRoute , private movieService: MoviesService) { }

  model!: movieDTO;
  
  ngOnInit(): void {
    this.editAction();
  }

  editAction(): void{
    this.activateRoute.params.subscribe(params =>{
      this.movieService.getByID(params['id']).subscribe((movie: movieDTO) => {
        this.model = movie;
      });
    })
  }

  saveChanges(movieCreationDTO: movieCreationDTO): any{

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.movieService.edit(this.model.id, movieCreationDTO).subscribe(()=>{
          console.log(movieCreationDTO);
          this.router.navigate(['/movie']);
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        this.router.navigate(['/movie']);
      }
    })
  }

}
