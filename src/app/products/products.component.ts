import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../product-model';
import { ProductService } from '../product.service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy {
products !:any;
category !:any;
sortedProducts !:any;

constructor(private service:ProductService){}
ngOnInit(): void {
  this.service.getAllProducts().subscribe(data =>{ this.products = data.products; this.sortedProducts = data.products; });
  this.service.getAllProductCategory().subscribe(data => this.category = data)
}
getProductByCategory(name:any){
// console.log(`Category : ${name}`);
this.service.getProductWithCategory(name).subscribe(data => this.sortedProducts = data.products)
}

sortProductsByPrices(SortingType:any) {
  let data = [...this.sortedProducts]
  if (SortingType === "asc") { data.sort((a:any, b:any) => a.price - b.price) }
  else { data.sort((a:any, b:any) => b.price - a.price) }
  this.sortedProducts = data;
}
ngOnDestroy(): void {

  return ;
}

}
