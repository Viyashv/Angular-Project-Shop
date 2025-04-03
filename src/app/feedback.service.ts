import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient , private route:Router) { }

  feedBackSubmit(username:any , email:any , feedback:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/FeedBack',{username , email , feedback})    
  }
}
