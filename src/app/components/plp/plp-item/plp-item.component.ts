import {Component, Input, OnInit} from '@angular/core';
import {
  ActiveCartService,
  Product,
  ProductPageMetaResolver,
  ProductSearchPage,
  ProductSearchService,
  ProductService
} from '@spartacus/core';
import {Observable} from 'rxjs';
import {filter, pluck, take} from 'rxjs/operators';
import {async} from '@angular/core/testing';

@Component({
  selector: 'app-plp-item',
  templateUrl: './plp-item.component.html',
  styleUrls: ['./plp-item.component.scss']
})
export class PlpItemComponent implements OnInit {

  @Input()
  product$: Product;

  // products$: Observable<Product>;

  constructor(private cartService: ActiveCartService) { }

  ngOnInit(): void {

    // this.productSearchService.search('100');
    // this.productSearchPage$ = this.productSearchService.getResults();

    // pipe(
    //   filter(res => res.hasOwnProperty('products')),
    //   pluck('products'),
    //   take(1)
    // )
    //   .subscribe((products: any[]) => {
    //     this.products$ = products;
    //   });
   // this.products$ =  this.productService.get('1002' , 'mm');

  }

  addToCart(code: string) {
    this.cartService.addEntry(code, 1);
  }
}
