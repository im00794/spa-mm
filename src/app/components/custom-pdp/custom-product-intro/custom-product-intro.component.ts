import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '@spartacus/core';
import {CurrentProductService} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-intro',
  templateUrl: './custom-product-intro.component.html',
  styleUrls: ['./custom-product-intro.component.scss'],
})
export class CustomProductIntroComponent implements OnInit {
  product$: Observable<Product> = this.currentProductService.getProduct();
  count: number = 1;
  quantity: number = 1;

  constructor(private currentProductService: CurrentProductService) {
    currentProductService.getProduct().subscribe((val) => console.log(val));
  }

  ngOnInit(): void {}

  counter(flag) {
    if (flag === 'increment') {
      this.count = this.count + 1;
    }
    if (flag === 'decrement' && this.quantity > 1) {
      this.count = this.count - 1;
    }
    this.quantity = this.count;
  }
}
