import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  public logout() {
    this.authenticationService.logout();
  }

}