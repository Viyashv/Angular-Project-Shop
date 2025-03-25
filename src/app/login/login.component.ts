import { UserService } from './../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username !: string;
    Password !: string;
    status = this.service.isLoginIn
    login(){
      console.log(this.username);
      console.log(this.Password);
      this.service.verifyUserLogin(this.username , this.Password)
    }
    
    constructor(private service:UserService){}
}
