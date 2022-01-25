export enum eProductCategory
{
  eFavorites='eFavorites',
  eTrending='eTrending',
  eOthers='eOthers'
}
export interface ProductCategory {
  id:eProductCategory,
  label:string,
  order:number
}
