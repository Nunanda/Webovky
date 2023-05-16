import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenService, UserService } from 'src/app/service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  imageUrl!: string;
  data: boolean = false;

  constructor(private router: Router, private tokenService: TokenService, private userService: UserService, public translate: TranslateService) { }

  ngOnInit() {
    this.currentUser = this.tokenService.getUser();
    const token = this.tokenService.getToken();
    if (this.currentUser.link !== null && token !== null) {
      this.userService.getPicture(token).subscribe(
        response => {
          this.imageUrl = URL.createObjectURL(response);
          this.tokenService.savePicture(URL.createObjectURL(response));
        },
        error => { }//Anet error handling
      );
    }
    else {
      //Anet error handling
    }
    if (token !== null) {
      this.userService.getProfile(token).subscribe(
        data0 => {
          this.tokenService.saveUser(data0);
          if (data0.language === "EN") {
            this.translate.use("EN");
          }
          else {
            this.translate.use("CZ");
          }
        },
        err => {
          //Anet error handling
        }
      );
    }
  }

  signOut() {
    this.tokenService.signOut();
    this.router.navigate(["home"]);
  }

  editProfile() {
    const token = this.tokenService.getToken();
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
    const token = this.tokenService.getToken();
    if (token !== null) {
      this.userService.delProfile(token).subscribe(
        data => {
          this.tokenService.signOut();
          this.router.navigate(["home"]);
        },
        error => { }//Anet error handling
      );
    }
    else {
      //Anet error handling
    }
  }

  getProfilePicture() {
    const token = this.tokenService.getToken();
    if (token !== null) {
      this.imageUrl = "";
      this.userService.getPicture(token).subscribe(
        response => {
          this.imageUrl = URL.createObjectURL(response);
        },
        error => { }//Anet error handling
      );
    }
    else {
      //Anet error handling
    }
  }

  delProfilePicture() {
    const token = this.tokenService.getToken();
    if (token !== null) {
      this.userService.setPicture(token, new FormData()).subscribe(
        data => {
        },
        error => { }//Anet error handling
      );
    }
    else {
      //Anet error handling
    }
  }

  onUpload() {
    const token = this.tokenService.getToken();
    const formData = new FormData();
    formData.append('image', this.dataURItoBlob(this.imageUrl));
    if (token !== null && !this.data) {
      this.userService.setPicture(token, formData).subscribe(
        data => {
        },
        error => { }//Anet error handling
      );
    }
    else {
      //Anet error handling
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file && file.type.startsWith('image/')) {
      this.data = false;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
    }
    else {
      this.data = true;
      this.imageUrl = "";
    }
  }

  dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  }
}
