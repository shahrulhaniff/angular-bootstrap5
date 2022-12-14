import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth : number;
  collapsed : boolean;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  title = 'sidenav tiger';

  isSideNavCollapsed= false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  constructor() { }

  ngOnInit() {
  }

}
