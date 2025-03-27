import { Injectable , signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 isLoginIn = signal(false);

 constructor(private router:Router){
  const val = localStorage.getItem('login');
  if (val){
    this.isLoginIn.set(true);
  }
 }

  verifyUserLogin(username:string , password:string){
    if (username === "admin" && password === "admin123"){
      this.isLoginIn.set(true);
      localStorage.setItem('login','true')
      this.router.navigate(['']);
    }
    else{
      alert("please enter valid username and password")
    }
    
  }
}
