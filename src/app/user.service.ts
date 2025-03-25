import { Injectable , signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 isLoginIn = signal(false);

 constructor(){
  const val = localStorage.getItem('login');
  if (val){
    this.isLoginIn.set(true);
  }
 }

  verifyUserLogin(username:string , password:string){
    if (username === "admin" && password === "admin123"){
      this.isLoginIn.set(true);
      localStorage.setItem('login','true')
    }
    else{
      alert("please enter valid username and password")
    }
    
  }
}
