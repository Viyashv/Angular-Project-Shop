import { Component, OnInit } from '@angular/core';
import { Product } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products :Product[]= [];

constructor(private service:ProductService){}
ngOnInit(): void {
  this.service.getAllProducts().subscribe(data => this.products = data)
}
}
