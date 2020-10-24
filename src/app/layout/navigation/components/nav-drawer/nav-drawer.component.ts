import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit {

  appName = 'Retry Code Art';

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  navigateTo(path: string[]) {
    this.navigationService.changeSidenavStatus();
    this.router.navigate(path);
  }
}
