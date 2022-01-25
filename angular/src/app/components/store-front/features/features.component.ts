import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../interfaces/category";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  @Input() category!: Category;
  @Input() mode:'mobile' | 'desktop' = 'desktop';

  constructor() { }

  ngOnInit(): void {
  }

}
