import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { directorDTO } from '../../director.module';
import { DirectorService } from '../../director.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private formBuilder: FormBuilder, private directorService: DirectorService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.login();
  }

  form!: FormGroup;
  viewdirector!: directorDTO[];
  directorid: number | any;
  directorfirstname: string | any;
  directorsecondname: string | any;

  login(){
    this.form = this.formBuilder.group({
      username: ['', {validators: [Validators.required]}],
      password: ['', {validators: [Validators.required]}],
    })
  }

  loginDirector(){
      this.DisplayAllDirectors();
  }

  DisplayAllDirectors(){
    this.directorService.getAllDirectors().subscribe((director: directorDTO[])=>{
      this.viewdirector = director;
      const currentDirector = director.find(({ username }) => username === this.form.value.username);
      console.log(director);
      console.log(currentDirector);

      this.directorid = currentDirector?.id;
      this.directorfirstname = currentDirector?.firstname;
      this.directorsecondname = currentDirector?.secondname;

      if(this.directorid!=undefined){
        this.loginService.setcurrentDirectorId(this.directorid);
        this.loginService.setcurrentDirectorFirstName(this.directorfirstname);
        this.loginService.setcurrentDirectorSecondName(this.directorsecondname);
        this.loginService.setIsLogin(true);
        this.router.navigate(['/movie']);
        console.log(this.directorid);
      }else{
        Swal.fire({
          title: 'Oops!',
          text: 'Username or password does not match! Please try again!',
          imageUrl: 'https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif',
          imageWidth: 400,
          imageHeight: 330,
          imageAlt: 'Custom image',
        })
      }
    })

  }
}
