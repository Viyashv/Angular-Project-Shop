import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error = signal(false)
        registerForm = new FormGroup({
          Email: new FormControl('',[Validators.required , Validators.email]),
          userName: new FormControl('',[Validators.required , Validators.pattern('^[a-zA-Z]+$') , Validators.minLength(3)]),
          password: new FormControl('',Validators.required),
          confirmPassword: new FormControl('',Validators.required)
        }

      )
        constructor(private service:UserService){}
        
        
        get emailName(){
          return this.registerForm.get('Email') as FormControl;
        }
        get userName(){
          return this.registerForm.get('userName') as FormControl;
        }
        get password1(){
          return this.registerForm.get('password') as FormControl;
        }
        get password2(){
          return this.registerForm.get('confirmPassword') as FormControl;
        }
        
        doRegister(){
          // console.log(`password1 : ${this.password1.value} password2 : ${this.password2.value}`);
          if (this.password1.value == this.password2.value){
            // console.log(this.password1.value == this.password2.value);
            const {Email , userName, password} = this.registerForm.value;
            // console.log(userName , Email , password);
            this.service.userRegister(userName , Email , password)
          }
          else{
            this.error.set(true)
          }
          
        }
      }
      