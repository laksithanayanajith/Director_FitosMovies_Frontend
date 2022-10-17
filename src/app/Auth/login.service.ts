import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private currentDirectorId: number | any;
  private currentDirectorfirstname: string | any;
  private currentDirectorsecondname: string | any;
  private isLogin: boolean = false;

  public setcurrentDirectorId(currentDirectorId: number): void{
    this.currentDirectorId = currentDirectorId;
  }

  public getcurrentDirectorId(): number{
    return this.currentDirectorId;
  }

  public setcurrentDirectorFirstName(firstname: string): void{
     this.currentDirectorfirstname = firstname;
  }

  public getcurrentDirectorFirstName(): string{
    return this.currentDirectorfirstname;
  }

  public setcurrentDirectorSecondName(secondname: string): void{
    this.currentDirectorsecondname = secondname;
 }

 public getcurrentDirectorSecondName(): string{
   return this.currentDirectorsecondname;
 }

  public setIsLogin(isLogin: boolean): void{
    this.isLogin = isLogin;
  }

  public getIsLogin(): boolean{
    return this.isLogin;
  }
}
