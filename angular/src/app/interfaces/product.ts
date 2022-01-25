import {ProductCategory} from "./productCategory";

export interface ProductImage {
  id : number,
  name : string,
  src : string,
  alt : string
}

export interface ProductColor {
  name : string,
  bgColor : string,
  selectedColor : string
}

export interface ProductDetails {
  name : string,
  items : string[]
}

export interface Product {
  id : number,
  name : string,
  description : string,
  color : string,
  price : string,
  imageSrc : string,
  imageAlt : string,
  quantity : number,
  href: string,
  rating : number,
  productCategoriesId : 'eFavorites' | 'eTrending' | 'eOthers',
  productCategories: ProductCategory,
  images? : ProductImage[],
  colors? : ProductColor[],
  details? : ProductDetails[]
}


