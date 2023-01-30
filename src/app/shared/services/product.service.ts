import { Injectable } from '@angular/core';
import { ProductStatus } from '../const/productEnum';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsArray: Iproduct[] = [
    {
      pname: "samsung",
      pId: 1,
      pStatus: ProductStatus.inProgress,
      editStatus: 1
    },
    {
      pname: "mi",
      pId: 2,
      pStatus: ProductStatus.dispatched,
      editStatus: 0
    },
    {
      pname: "Iphone",
      pId: 3,
      pStatus: ProductStatus.delivered,
      editStatus: 1
    },
  ]

  constructor() { }

  getAllProducts() {
    return this.productsArray
  }
  getSingleProduct(id: number) {
    return this.productsArray.find(prod => prod.pId === id)
  }
  updateProduct(pname: string, pstatus: string, id: number) {
    this.productsArray.forEach(prod => {
      if (prod.pId === id) {
        prod.pname = pname;
        prod.pStatus = pstatus;
      }
    })
  }
}
