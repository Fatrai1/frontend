import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.productlist$;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(
    ): void {
    this.productService.getAll();
  }
  deleteItem(product: Product): void {
    this.productService.remove(product).subscribe(
      () => {
        this.productService.getAll();
      }
    );
  }
}



