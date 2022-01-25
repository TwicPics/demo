import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterNavigation } from "../../../interfaces/footerNavigation";
import { Subscription } from "rxjs";
import { DataApiService } from "../../../services/data-api.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {


    footerNavigation!: FooterNavigation;
    footerNavigationSubscription!: Subscription;

    constructor(private dataApiService: DataApiService) { }

    ngOnInit(): void {
        this.footerNavigationSubscription = this.dataApiService.footerNavigationSubject.subscribe(footerNavigation => {
            this.footerNavigation = footerNavigation;
        });

        this.dataApiService.getFooterNavigation();
    }

    ngOnDestroy(): void {
        this.footerNavigationSubscription.unsubscribe();
    }
}
