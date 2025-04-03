import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { FeedbackService } from './feedback.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search !:string;
  username !:string;
  email !:string;
  feedback !: string;
  
  searchInput(){
    console.log(`Search : ${this.search}`);
    this.router.navigate([`/search/${this.search}`])
  }
  
  status = this.service.isLoginIn
  logoutUser(){
    this.service.isLoginIn.set(false);
    localStorage.removeItem('login')
  }
  submit(form:NgForm){
    this.feedbackservice.feedBackSubmit(this.username , this.email , this.feedback)
    .subscribe(data =>{alert("Feedback is successfully submitted"),form.reset()})
  }
  constructor(private service:UserService , private router:Router,private feedbackservice:FeedbackService) { }

}
