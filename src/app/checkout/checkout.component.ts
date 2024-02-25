import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkOutItemsCollection: any = [];
  productQuantity: number = 1;
  totalProductQuantity: number;

  quantity: number = 1;

  tax: number = 5.0;
  subTotalValue: number = 0;

  constructor(private route: Router) {
    this.checkOutItemsCollection =
      this.route.getCurrentNavigation().extras.state;
  }
  sampleData: any;
  ngOnInit(): void {
    const localStorageData = localStorage.getItem('productsToCart');
    this.checkOutItemsCollection = JSON.parse(localStorageData)
    // if (JSON.parse(localStorage.getItem('productsToCart'))) {
    //   this.checkOutItemsCollection = JSON.parse(
    //     localStorage.getItem('productsToCart')
    //   );
    // } else {
    //   this.checkOutItemsCollection = this.checkOutItemsCollection?.name;
      this.checkOutItemsCollection.map((itemValue) => {
        // this.totalProductQuantity = itemValue.price * itemValue.quantity;
        this.subTotalValue = this.subTotalValue + itemValue.totalPrice;
      });
    }
  

  minus(item) {
    if (item && item.quantity && item.id && item.quantity !== 1) {
      item.quantity = item.quantity - 1;
      item.totalPrice = item.quantity * item.price;
      this.subTotalValue = this.subTotalValue - item.price;
    }
  }

  add(item) {
    if (item && item.quantity && item.id && item.quantity >= 1) {
      item.quantity = item.quantity + 1;
      item.totalPrice = item.quantity * item.price;
      this.subTotalValue = this.subTotalValue + item.price;
    }
  }
}
