import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  isSidenavOpen = false;

  private sidenavOpenStatus = new BehaviorSubject<boolean>(false);

  constructor() { }

  changeSidenavStatus() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.sidenavOpenStatus.next(this.isSidenavOpen);
  }

  getSidenavOpenStatus(): Observable<boolean> {
    return this.sidenavOpenStatus;
  }
}
