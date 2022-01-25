import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Navigation} from "../../../interfaces/navigation";
import {DataApiService} from "../../../services/data-api.service";
import {trigger, state, style, animate, transition} from "@angular/animations";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger(
      'inOutDesktopAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('200ms ease-out',
              style({ opacity: 1 })
            )
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('200ms ease-out',
              style({ opacity: 0 })
            )
          ]
        )
      ]
    ),
    trigger(
      'inOutMobileBgAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('300ms ease-out',
              style({ opacity: 1 })
            )
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('300ms ease-out',
              style({ opacity: 0 })
            )
          ]
        )
      ]
    ),
    trigger(
      'inOutMobileAnimation',
      [
        transition(
          ':enter',
          [
            style({ transform: 'translateX(-100%)' }),
            animate('300ms ease-out',
              style({ transform: 'translateX(0)' }),
            )
          ]
        ),
        transition(
          ':leave',
          [
            style({ transform: 'translateX(0)' }),
            animate('300ms ease-out',
              style({ transform: 'translateX(-100%)' }),
            )
          ]
        )
      ]
    )
  ]
})
export class NavigationComponent implements OnInit, OnDestroy {

  mobileMenuOpen = false;

  navigation!: Navigation;

  navigationSubscription! : Subscription;

  openedMobileTab: Number = 0;

  openedDesktopTab?: Number = undefined;

  constructor(private dataApiService:DataApiService) { }


  toggleMobileTab(tabToOpen:Number){
    this.openedMobileTab = tabToOpen;
  }

  toggleDesktopTab(tabToOpen:Number){
    this.openedDesktopTab = this.openedDesktopTab !== tabToOpen ? tabToOpen : -1;
  }

  toggleMenuMobile(){
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  ngOnInit(): void {

    this.navigationSubscription = this.dataApiService.navigationSubject.subscribe(navigation =>
    {
      this.navigation = navigation;
    })

    this.dataApiService.getNavigation();
  }

  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe();
  }

}
