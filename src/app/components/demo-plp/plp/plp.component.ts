import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ProductSearchPage, ProductSearchService} from '@spartacus/core';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})
export class PlpComponent implements OnInit {

  productSearchPage$: Observable<ProductSearchPage>;
  constructor(private productSearchService: ProductSearchService) { }

  ngOnInit(): void {
    this.productSearchService.search('100');
    this.productSearchPage$ = this.productSearchService.getResults();
  }

}
