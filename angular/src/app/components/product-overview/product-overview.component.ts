import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit, OnDestroy {

  product?: Product;
  productSubscription?: Subscription;

  ratings: number[] = [1,2,3,4,5];

  selectedImageId?: number;

  constructor(private dataApiService:DataApiService) { }

  ngOnInit(): void {
    this.productSubscription = this.dataApiService.productForOverViewSubject.subscribe(productForOverView =>
      {
        this.product = productForOverView;
        this.selectedImageId = ( this.product && this.product.images && this.product.images.length > 0 ) ?
            this.product.images[0].id : undefined;
      })

      this.dataApiService.getProductForOverView();
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

  onSelectedImage( selectedImageId: number) :void{
    this.selectedImageId = selectedImageId;
  }

}
