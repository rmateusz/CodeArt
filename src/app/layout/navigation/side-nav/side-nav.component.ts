import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent {
  zdarzenia: string[] = [];
  opened = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  goToContact = () => {
    this.router.navigate([`/contact`]);
  }

}
