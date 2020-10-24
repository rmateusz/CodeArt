import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry-header',
  templateUrl: './retry-header.component.html',
  styleUrls: ['./retry-header.component.scss']
})
export class RetryHeaderComponent implements OnInit {

  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuClick(slowo: string) {
    console.log(slowo);
    this.isMenuOpen = !this.isMenuOpen;
  }
}
