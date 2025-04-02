import { NgForm } from '@angular/forms';
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
      // console.log(this.username , this.Password);
      
      if(this.username && this.Password){
        this.service.verifyUserLogin(this.username , this.Password)
      }
      console.log('please enter both username and password')
    }
    
    constructor(private service:UserService){}
}
