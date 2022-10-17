import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Auth/login.service';
import Swal from 'sweetalert2';
import { movieCreationDTO } from '../movie.module';

interface Genre{
  name: string
}

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  form!: FormGroup | any;

  date: Date = new Date();
  Today: string = formatDate(this.date, 'y-MM-dd', 'en-US');

  ngOnInit(): void {
    this.movieForm();
    this.editMovie();
  }

  movieForm(): void{
    this.form = this.formBuilder.group({
      name: ['', {validators: [Validators.required]}],
      year: ['', {validators: [Validators.required ,  Validators.minLength(4) , Validators.maxLength(4) , Validators.pattern(('^[0-9]*$'))]}],
      genre: ['', {validators: [Validators.required]}],
      poster_link: ['', {validators: [Validators.required , Validators.pattern(('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$'))]}],
      teaser_link: ['', {validators: [Validators.required , Validators.pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]}],
      description: ['', {validators: [Validators.required]}],
      director_id: [this.loginService.getcurrentDirectorId(), {validators: [Validators.required , Validators.pattern(('^[0-9]*$'))]}],
      added_date_time: [this.Today, {validators: [Validators.required]}]

    })
  }
  
  genre: Genre[] = [
    {name: "Action"},
    {name: "Adventrue"},
    {name: "Crime"},
    {name: "Drama"},
    {name: "Fantasy"},
    {name: "Comic"}
]

editMovie(): void{
  if(this.model !== undefined){
    this.form.patchValue(this.model);
  }
}

GetErrorMessageFieldName(){
  if(this.form.get('name').hasError('required')){
    return 'The movie name feild is required!';
  }
  else if(this.form.get('name').hasError('pattern')){
    return 'Movie name must have letters or numbers only!';
  }else{
    return '';
  }
}

GetErrorMessageFieldYear(){
  if(this.form.get('year').hasError('required')){
    return 'The movie year feild is required!';
  }
  else if(this.form.get('year').hasError('minLength')){
    return 'Year must have four numbers!';
  }
  else if(this.form.get('year').hasError('maxLength')){
    return 'You trying to enter an unbelievable year!';
  }
  else if(this.form.get('year').hasError('pattern')){
    return 'This does not like a year!';
  }else{
    return '';
  }
}

GetErrorMessageFieldGenre(){
  if(this.form.get('name').hasError('required')){
    return 'The movie genre feild is required!';
  }else{
    return '';
  }
}

GetErrorMessageFieldPosterLink(){
  if(this.form.get('poster_link').hasError('required')){
    return 'The movie poster link feild is required!';
  }
  else if(this.form.get('poster_link').hasError('pattern')){
    return 'Invalid URL!!';
  }else{
    return '';
  }
}

GetErrorMessageFieldTeaserLink(){
  if(this.form.get('teaser_link').hasError('required')){
    return 'The movie teaser link feild is required!';
  }
  else if(this.form.get('teaser_link').hasError('pattern')){
    return 'Invalid URL!!';
  }else{
    return '';
  }
}

GetErrorMessageFieldDescription(){
  if(this.form.get('description').hasError('required')){
    return 'The movie description feild is required!';
  }else{
    return '';
  }
}

GetErrorMessageFieldDirectorId(){
  if(this.form.get('director_id').hasError('required')){
    return 'The director id feild is required!';
  }
  else if(this.form.get('director_id').hasError('pattern')){
    return 'Invalid director id!';
  }else{
    return '';
  }
}


  @Output()
  onSaveChanges: EventEmitter<movieCreationDTO> = new EventEmitter<movieCreationDTO>();

  @Input()
  model!: movieCreationDTO | any;

  saveChangesForm(): void{
    this.onSaveChanges.emit(this.form.value);
  }

  clear(): void{
    this.form.reset();
  }

  help(){
    Swal.fire({
      title: 'Have Problem?',
      text: 'If you trouble in when adding new movie.. do not warry! Follow these instroductions. 1st movie name cannot be blank and year must be numbers. 3rd you can add these genre types only. In 4th and 5th please copy and paste your poster and trailer links. finaly add best description. Thats it!',
      imageUrl: 'https://cdn.dribbble.com/users/291221/screenshots/1425333/helper.gif',
      imageWidth: 400,
      imageHeight: 320,
      imageAlt: 'Custom image',
    })
  }

}

