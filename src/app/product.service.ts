import { Injectable } from '@angular/core';
import { Product } from './product-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProducts():Observable<any>{
    return this.http.get<any>('https://dummyjson.com/products?limit=0')
  }

  getProductById(id:any):Observable<any>{
    return this.http.get<any>(`https://dummyjson.com/products/${id}`)
    
  }
  getAllProductCategory():Observable<any>{
    return this.http.get<any>('https://dummyjson.com/products/categories')
  }

  getProductWithCategory(name:any):Observable<any>{
    return this.http.get<any>(`https://dummyjson.com/products/category/${name}`)
  }
  getProductBySearch(name:any):Observable<any>{
    return this.http.get<any>(`https://dummyjson.com/products/search?q=${name}&limit=0`)
  }

  constructor(private http:HttpClient) { 
    
  }
}
