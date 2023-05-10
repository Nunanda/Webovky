import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as e from 'cors';
import { TokenService, UserService } from 'src/app/service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private router: Router, private tokenservice: TokenService, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.tokenservice.getUser();
  }

  signOut() {
    this.tokenservice.signOut();
    this.router.navigate(["home"]);
  }

  editProfile() {
    const token = this.tokenservice.getToken();
    if (token !== null) {
      this.userService.setProfile(token, this.currentUser).subscribe(
        data => {
        },
        error => { }//Anet error handling
      );
    }
    else {
      //Anet error handling
    }
  }

  deleteProfile() {
    const token = this.tokenservice.getToken();
    if (token !== null) {
      this.userService.delProfile(token).subscribe(
        data => {
          this.tokenservice.signOut();
          this.router.navigate(["home"]);
        },
        error => { }//Anet error handling
      );
    }
    else {
      //Anet error handling
    }
  }
}
