import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'northwind';
  user:string = "Mr Worldwide"
  product1 = {productId:1, productName:'Laptop', categoryId:1, unitPrice:5000};
  product2 = {productId:2, productName:'Desktop', categoryId:1, unitPrice:15000};
  product3 = {productId:3, productName:'IPad', categoryId:1, unitPrice:4500};
  product4 = {productId:4, productName:'Phone', categoryId:2, unitPrice:12500};
  product5 = {productId:5, productName:'Camera', categoryId:2, unitPrice:5100};
  products = [
    this.product1, 
    this.product2,
    this.product3,
    this.product4,
    this.product5
  ];

}
