import { HttpClient } from '@angular/common/http';
import { Injectable , signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 isLoginIn = signal(false);

 constructor(private router:Router , private http:HttpClient){
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
      alert("Username or Password is incorrect")
    }
    
  }
  userRegister(fullName:any , email:any , password:any){
    console.log(fullName , email , password);    
    this.http.post('http://localhost:3000/User',{fullName , email , password}).subscribe(
      response => console.log('User created:', response),
      error => console.error('Error:', error)
    );
    this.router.navigate(['/login'])
  }
}
