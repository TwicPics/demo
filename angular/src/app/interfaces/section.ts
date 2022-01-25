import {Item} from "./item";

/**
 *
 */
export interface Section {
  type: 'category' | 'feature' | 'collection' | 'comfort',
  title?: string,
  headerLink?: string,
  subTitle?: string,
  itemsDisplayMode : 'compact' | 'extended';
  items?: Item[],
  background?: BackgroundSection
}

/**
 *
 */
export interface BackgroundSection {
  imageSrc : string,
  title : string,
  txt : string;
  buttonTxt: string;
}



