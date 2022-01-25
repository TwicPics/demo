import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataApiService} from "../../services/data-api.service";
import {Subscription} from "rxjs";
import {Section} from "../../interfaces/section";

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.scss']
})
export class StoreFrontComponent implements OnInit, OnDestroy {

  sections?: Section[];
  sectionsSubscription?: Subscription;

  constructor(private dataApiService:DataApiService) { }

  ngOnInit(): void {


    this.sectionsSubscription = this.dataApiService.sectionsSubject.subscribe(sections =>
    {
      this.sections = sections;
    })

    this.dataApiService.getSections();


  }

  ngOnDestroy(): void {
    this.sectionsSubscription!.unsubscribe();
  }


}
