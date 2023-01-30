import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productData: Iproduct[] = []
  selectedProdId: number = 1;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productData = this.productService.getAllProducts()
  }

}
