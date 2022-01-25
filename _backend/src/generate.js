/**
 * Json database generation
 * Used with json-server
 * https://github.com/typicode/json-server
 */
import { getProductForOverview } from "./productOverview.js";
import { getProductList, getProductCategories } from "./productsListing.js";
import { getCurrencies, getFooterNavigation, getNavigation, getSections } from "./storeFront.js";


let database = {
    products: getProductList(),
    productCategories: getProductCategories(),
    currencies: getCurrencies(),
    navigation: getNavigation(),
    sections: getSections(),
    footerNavigation: getFooterNavigation(),
    productForOverView: getProductForOverview()
};


console.log(JSON.stringify(database));
