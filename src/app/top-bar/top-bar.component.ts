import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  cartIconDisplay = false;
  cartItems = 0;
  cartItemCollection = [];
  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private route: Router
  ) {}
  data: any = [];
  ngOnInit(): void {
    this.api.addCart.subscribe((res) => {
      this.cartIconDisplay = true;
      this.cartItems = this.cartItems + 1;
      this.cartItemCollection.push(res);
      console.log(this.cartItemCollection, 'Items Got ');
    });
  }

  onCartOpen() {
    if (this.cartItemCollection.length === 0) {
      this.toastr.warning('Please Add Items in Cart First', '😕');
      return;
    }
    this.route.navigateByUrl('/cart', {
      state: { name: this.cartItemCollection },
    });
    this.api.checkOutItems.next(this.cartItemCollection);
  }
}
