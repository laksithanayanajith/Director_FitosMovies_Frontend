import { Component } from '@angular/core';
import { LoginService } from './Auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService: LoginService){}

  title = 'fitos_movies';

  isLogin(): boolean{
    return this.loginService.getIsLogin();
  }
}
