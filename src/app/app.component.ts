import { Component } from '@angular/core';
import { UserService } from './user.service';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { Router } from '@angular/router';

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
  submit(){
    console.log(`UserName : ${this.username} Email : ${this.email} Feedback : ${this.feedback}`);
    alert(`Your feedback has been submitted ${this.username}`)
    
  }
  constructor(private service:UserService , private router:Router) { }

}
