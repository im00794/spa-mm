import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductSearchPage, ProductSearchService} from '@spartacus/core';

@Component({
  selector: 'app-custom-blog',
  templateUrl: './custom-blog.component.html',
  styleUrls: ['./custom-blog.component.scss']
})
export class CustomBlogComponent implements OnInit {
  productSearchPage$: Observable<ProductSearchPage>;
  constructor(private productSearchService: ProductSearchService) { }

  ngOnInit(): void {
    this.productSearchService.search('');
    this.productSearchPage$ = this.productSearchService.getResults();
  }
}
