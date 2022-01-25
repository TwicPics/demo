import {Component, Input, OnInit} from '@angular/core';
import {Section} from "../../../../interfaces/section";

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {

  @Input() section?:Section;
  @Input() mode:'compact' | 'extended' = 'compact';

  constructor() { }

  ngOnInit(): void {
  }

}
