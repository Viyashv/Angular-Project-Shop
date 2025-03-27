import { Component, OnInit } from '@angular/core';
import { Product } from '../product-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productDetails !: Product;
  constructor(private route:ActivatedRoute , private service:ProductService , private router:Router) { }
  
  ngOnInit(): void {
    // Set initial data for the component
    
    this.route.paramMap.subscribe((param)=>{
      const id = param.get('id')
      this.service.getProductById(id).subscribe(data => {this.productDetails = data})
    })
    
  }
  backToProductList(){
    this.router.navigate(['/products'])
  }
}

