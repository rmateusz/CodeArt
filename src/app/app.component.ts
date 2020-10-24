import { Component, OnDestroy, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from './layout/navigation/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isSidenavOpen$: Observable<boolean>;
  title = 'rca';

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnDestroy() {
  }

  ngOnInit() {
    this.isSidenavOpen$ = this.navigationService.getSidenavOpenStatus();
  }

  onBackdropClick() {
    this.navigationService.changeSidenavStatus();
  }
}
