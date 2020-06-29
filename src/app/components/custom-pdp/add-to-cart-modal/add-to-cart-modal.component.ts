import {Component, Input, OnInit} from '@angular/core';
import {ActiveCartService} from '@spartacus/core';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.scss'],
})
export class AddToCartModalComponent implements OnInit {
  @Input() productCode: string;
  @Input() productName: string;
  @Input() quantity: any;
  constructor(private cartService: ActiveCartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addEntry(this.productCode, this.quantity);
  }
}
