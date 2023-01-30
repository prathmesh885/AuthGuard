import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId: number = 1;
  productDetails: Iproduct | undefined;
  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.productId = +params['id']
      this.productDetails = this.productService.getSingleProduct(this.productId)
    })
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
    })
  }

  goToEditProduct() {
    this.router.navigate(['/products', this.productId, 'edit',], {
      queryParamsHandling: 'preserve'
    })
  }
}
