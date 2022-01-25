import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataApiService} from "../../../services/data-api.service";

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit, OnDestroy {

  @Input() currencyId:string = 'defaultCurrency';
  @Input() theme:'dark' | 'white' = 'dark';

  currencies: string[] = ['CAD'];

  currenciesSubscription! : Subscription;

  constructor(private dataApiService: DataApiService) { }

  ngOnInit(): void {

    this.currenciesSubscription = this.dataApiService.currenciesSubject.subscribe(currencies =>
    {
      this.currencies = currencies;
    })

    this.dataApiService.getCurrencies();
  }

  ngOnDestroy(): void {
    this.currenciesSubscription.unsubscribe();
  }

}
