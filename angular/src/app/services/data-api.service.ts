import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { forkJoin, Observable, Subject, throwError } from "rxjs";
import { Product } from "../interfaces/product";
import { ProductCategory } from "../interfaces/productCategory";
import { catchError } from "rxjs/operators";
import { Navigation } from "../interfaces/navigation";
import { FooterNavigation } from "../interfaces/footerNavigation";
import { Section } from "../interfaces/section";

@Injectable({
    providedIn: 'root'
})

/**
 *
 */
export class DataApiService {

    private apiEndPoint: string;

    // Products
    private products: Product[] = [];

    private productCategories: ProductCategory[] = [];

    productsSubject = new Subject<Product[]>();

    productCategoriesSubject = new Subject<ProductCategory[]>();

    // Currencies
    private currencies: string[] = [];

    currenciesSubject = new Subject<string[]>();

    // Navigation
    private navigation?: Navigation;

    navigationSubject = new Subject<Navigation>();

    // Section
    private sections?: Section[];

    sectionsSubject = new Subject<Section[]>();

    // Footer navigation
    private footerNavigation?: FooterNavigation;

    footerNavigationSubject = new Subject<FooterNavigation>();

    // Product for overview
    private productForOverView?: Product;

    productForOverViewSubject = new Subject<Product>();

    constructor(private httpClient: HttpClient, private configService: ConfigService) {
        this.apiEndPoint = (this.configService && this.configService.appConfig) ?
            this.configService.appConfig.restApiEndPoint : "";
    }

    emitProducts() {
        this.productsSubject.next(this.products.slice());
    }

    emitProductCategories() {
        this.productCategoriesSubject.next(this.productCategories.slice());
    }

    /**
     * Get product from server (database)
     */
    getProducts() {
        let products$ = this.getObservable<Product[]>(`products?_expand=productCategories`);
        let productCategories$ = this.getObservable<ProductCategory[]>(`productCategories`);
        forkJoin([products$, productCategories$]).subscribe(results => {
            this.products = results[0];
            this.productCategories = this.orderProductCategories(results[1]);
            this.emitProducts();
            this.emitProductCategories();
        });
    }

    emitCurrencies() {
        this.currenciesSubject.next( this.currencies.slice() );
    }

    /**
     * Get currencies from server (database)
     */
    getCurrencies() {

        let currencies$ = this.getObservable<string[]>( `currencies` );

        currencies$.subscribe(results => {
            this.currencies = results;
            this.emitCurrencies();
        })
    }

    emitNavigation() {
        this.navigationSubject.next(this.navigation!);
    }

    /**
     * Get Navigation from server (database)
     */
    getNavigation() {

        let navigation$ = this.getObservable<Navigation>(`navigation`);

        navigation$.subscribe(results => {
            this.navigation = results;
            this.emitNavigation();
        })

    }

    emitSections() {
        this.sectionsSubject.next(this.sections!);
    }

    /**
     * Get sections from server (database)
     */
    getSections() {
        let sections$ = this.getObservable<Section[]>(`sections`);
        sections$.subscribe(results => {
            this.sections = results;
            this.emitSections();
        })
    }

    emitFooterNavigation() {
        this.footerNavigationSubject.next(this.footerNavigation!);
    }

    /**
     * Get footer navigation data from server (database)
     */
    getFooterNavigation() {
        let footerNavigation$ = this.getObservable<FooterNavigation>(`footerNavigation`);
        footerNavigation$.subscribe(results => {
            this.footerNavigation = results;
            this.emitFooterNavigation();
        })
    }

    emitProductForOverView() {
        this.productForOverViewSubject.next(this.productForOverView!);
    }

    /**
     * Get product overview datas from server (database)
     */
    getProductForOverView() {
        let productForOverView$ = this.getObservable<Product>(`productForOverView`);
        productForOverView$.subscribe(results => {
            this.productForOverView = results;
            this.emitProductForOverView();
        })
    }


    /**
     * Return an observable of class T to fetch data from url
     * @param url
     * @private
     */
    private getObservable<T>(url: string): Observable<T> {
        let observable = this.httpClient.get<T>(`${this.apiEndPoint}/${url}`).pipe(
            catchError((this.handleError)),
        );
        return observable;
    }

    /**
     * Order productCategories versus order attribute
     * @param productCategories
     */
    private orderProductCategories(productCategories: ProductCategory[]): ProductCategory[] {
        return productCategories.sort((a: ProductCategory, b: ProductCategory) => {
            return a.order - b.order;
        });
    }

    /**
     * error handling
     * @param error
     * @returns
     */
    private handleError(error: HttpErrorResponse) {
        console.error( `Error while trying to join data server. Server off ? `, error );
        return throwError( () => new Error() );
    }
}
