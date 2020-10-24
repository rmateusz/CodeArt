import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../../app-routing.module';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialModule } from '../material/material.module';
import { RetryHeaderComponent } from '../retry-header/retry-header.component';
import { RetryFooterComponent } from '../retry-footer/retry-footer.component';

@NgModule({
  declarations: [
    SideNavComponent,
    NavDrawerComponent,
    RetryHeaderComponent,
    RetryFooterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [
    SideNavComponent,
    MatSidenavModule,
    NavDrawerComponent
  ]
})
export class NavigationModule { }
