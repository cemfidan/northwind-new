import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product1 = {
    productId: 1,
    productName: 'Laptop',
    categoryId: 1,
    unitPrice: 5000,
  };
  product2 = {
    productId: 2,
    productName: 'Desktop',
    categoryId: 1,
    unitPrice: 15000,
  };
  product3 = {
    productId: 3,
    productName: 'Workstation',
    categoryId: 1,
    unitPrice: 4500,
  };
  product4 = {
    productId: 4,
    productName: 'Server',
    categoryId: 2,
    unitPrice: 5500,
  };
  product5 = {
    productId: 5,
    productName: 'Tablet',
    categoryId: 2,
    unitPrice: 500,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];

  constructor() {}
  ngOnInit(): void {}
}
