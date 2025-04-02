import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit{
products !:any;
queryParams !:any;
page :number = 1;
itemsPerPage:number = 10;
constructor(private input:ActivatedRoute,private service:ProductService){}

ngOnInit(){
  this.input.paramMap.subscribe(params =>{this.queryParams = params.get('name'); console.log(`this.queryParams : ${this.queryParams}`);
  this.service.getProductBySearch(this.queryParams).subscribe(data => {this.products = data.products; this.page = 1})
  })
}

}
