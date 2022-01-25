import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from "./services/config.service";
import { StoreFrontComponent } from './components/store-front/store-front.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductsListingComponent } from './components/products-listing/products-listing.component';
import { ProductsListComponent } from './components/products-listing/products-list/products-list.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { CurrenciesComponent } from './components/store-front/currencies/currencies.component';
import { NavigationComponent } from './components/store-front/navigation/navigation.component';
import { FeaturesComponent } from './components/store-front/features/features.component';
import { FooterComponent } from './components/store-front/footer/footer.component';
import { SectionComponent } from './components/store-front/section/section.component';
import { ItemsContainerComponent } from './components/store-front/section/items-container/items-container.component';
import { StarComponent } from './components/product-overview/star/star.component';
import { CommonModule } from '@angular/common';

import { TwicPicsComponentsModule } from '@twicpics/components/angular13';


/**
 * Routes of demo application
 */
const appRoutes: Routes = [
    {
        path: 'productsListing',
        component: ProductsListingComponent
    },
    {
        path: 'productOverview',
        component: ProductOverviewComponent
    },
    {
        path: 'storeFront',
        component: StoreFrontComponent
    },
    {
        path: 'home',
        component: StoreFrontComponent
    },
    {
        path: '',
        redirectTo: 'productsListing',
        pathMatch: 'full'
    },
]

@NgModule({
    declarations: [
        AppComponent,
        StoreFrontComponent,
        ProductsListingComponent,
        ProductOverviewComponent,
        ProductsListComponent,
        HeaderMainComponent,
        CurrenciesComponent,
        NavigationComponent,
        FeaturesComponent,
        FooterComponent,
        SectionComponent,
        ItemsContainerComponent,
        StarComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TwicPicsComponentsModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER, multi: true, deps: [ConfigService], useFactory: (configService: ConfigService) => () => configService.getConfig()
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
