import { Injectable } from '@angular/core';
import { Product } from './product-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProducts():Observable<any>{
    return this.http.get<any>('https://dummyjson.com/products')
  }

  getProductById(id:any):Observable<any>{
    return this.http.get<any>(`https://dummyjson.com/products/${id}`)
    
  }
  constructor(private http:HttpClient) { 
    
  }
}
