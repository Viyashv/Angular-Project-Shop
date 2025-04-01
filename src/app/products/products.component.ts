import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
productsData !:any;
category !:any;
sortedProducts !:any;
page :number = 1;
itemsPerPage :number = 10

constructor(private service:ProductService,private router:Router) { }

ngOnInit(): void {
  this.service.getAllProducts().subscribe(data =>{this.productsData = data.products; 
                                                  this.sortedProducts = data.products; 
                                                  console.log(this.productsData.length);
                                                  });
  this.service.getAllProductCategory().subscribe(data => this.category = data)
  
}
getProductByCategory(name:any){
// console.log(`Category : ${name}`);
if (name == 'all'){this.sortedProducts = this.productsData; this.page = 0}
else{this.service.getProductWithCategory(name).subscribe(data => {this.sortedProducts = data.products; this.page = 0})}
}

sortProductsByPrices(SortingType:any) {
  let data = [...this.sortedProducts]
  if (SortingType === "asc") { data.sort((a:any, b:any) => a.price - b.price) }
  else { data.sort((a:any, b:any) => b.price - a.price) }
  this.sortedProducts = data;
}
backToProductList(){
this.router.navigate(['/products'])
}

}
