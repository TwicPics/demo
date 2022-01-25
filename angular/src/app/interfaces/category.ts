import {Item} from "./item";

export interface Category {
  name: string,
  href?: string,
  imageSrc?: string,
  featured?: Item[]
}



