import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  name = 'viyash Turkane';
  status = this.service.isLoginIn
  logoutUser(){
    this.service.isLoginIn.set(false);
    localStorage.removeItem('login')
  }
  constructor(private service:UserService){}

}
