import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() rating:number = 0;
  @Input() value:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
