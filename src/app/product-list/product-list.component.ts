import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any = [];
  productsAddtoCart = [];

  constructor(private api: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.api.getData().subscribe((res) => {
      this.products = res;
    });
  }

  onAddCart(item) {
    console.log(item, 'items added');
    this.api.addCart.next(item);
    this.productsAddtoCart.push(item);
    localStorage.setItem('productsToCart',JSON.stringify(this.productsAddtoCart));
  //   const arr = [];
  //   arr.push(item);
  //  JSON.parse(localStorage.getItem('itemValue')) || [];
  //   localStorage.setItem(JSON.stringify('itemValue', arr) || []);
    //  localStorage.setItem('itemValue', this.productsAddtoCart.push(item));
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
