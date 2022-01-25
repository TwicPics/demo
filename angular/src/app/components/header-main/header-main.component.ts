import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-main',
    templateUrl: './header-main.component.html',
    styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent implements OnInit {

    menuVisible: boolean = false;

    /**
     * hamburger button data
     */
    routes =
        [
            {
                url: 'productsListing',
                text: 'Product listing'
            },
            {
                url: 'storeFront',
                text: 'Storefront'
            },
            {
                url: 'productOverview',
                text: 'Product overview'
            },
        ];



    constructor() { }

    toggleMenu() {
        this.menuVisible = !this.menuVisible;
    }

    ngOnInit(): void {
    }

}
