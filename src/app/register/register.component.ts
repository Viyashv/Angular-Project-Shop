import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
        registerForm = new FormGroup({
          Email: new FormControl('',[Validators.required , Validators.email]),
          userName: new FormControl('',[Validators.required , Validators.pattern('^[a-zA-Z]+$') , Validators.minLength(3)]),
          password: new FormControl('',Validators.required),
          confirmPassword: new FormControl('',Validators.required)
        })

        doRegister(){
          console.log(this.registerForm.value);
        }

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
}
