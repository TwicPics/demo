import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../../interfaces/product";
import { eProductCategory, ProductCategory } from "../../../interfaces/productCategory";


@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    @Input() productCategory!: ProductCategory;
    @Input() productList!: Product[];

    constructor() { }

    getRatio() {
        if (this.productCategory.id === eProductCategory.eFavorites) {
            return "2/3";
        }

        if (this.productCategory.id === eProductCategory.eTrending) {
            return "4/5";
        }

        return "";
    }

    getProductClass() {
        if (this.productCategory.id === eProductCategory.eFavorites) {
            return "mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8";
        }
        return "mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8";

    }

    ngOnInit(): void {
    }

}
