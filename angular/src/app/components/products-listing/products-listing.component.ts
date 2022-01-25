import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Product } from "../../interfaces/product";
import { eProductCategory, ProductCategory } from "../../interfaces/productCategory";
import { DataApiService } from "../../services/data-api.service";

@Component({
    selector: 'app-products-listing',
    templateUrl: './products-listing.component.html',
    styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit, OnDestroy {

    productsList: Product[] = [];

    productCategories: ProductCategory[] = [];

    productListSubscription!: Subscription;

    productCategoriesSubscription!: Subscription;

    constructor(private dataApiService: DataApiService) { }


    ngOnInit(): void {
        this.productListSubscription = this.dataApiService.productsSubject.subscribe(
            (productsList) => {
                this.productsList = productsList;
            }
        )

        this.productCategoriesSubscription = this.dataApiService.productCategoriesSubject.subscribe((productCategories) => {
            this.productCategories = productCategories;
        });


        this.dataApiService.getProducts();
    }

    /**
     *
     * @param idProductCategory
     */
    getProductByCategory(idProductCategory: eProductCategory): Product[] {
        return this.productsList.filter((p: Product) => {
            return p.productCategoriesId === idProductCategory;
        });
    }

    ngOnDestroy(): void {
        this.productListSubscription.unsubscribe();
        this.productCategoriesSubscription.unsubscribe();
    }


}
