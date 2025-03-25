import { Component } from '@angular/core';
import { Product } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products :Product[]= [];

constructor(private service:ProductService){
  this.service.getAllProducts().subscribe(data => this.products = data)
}
}
