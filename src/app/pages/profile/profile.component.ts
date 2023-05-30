import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, TokenService, UserService, ValidationService } from 'src/app/service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  imageUrl!: string;
  data: boolean = false;
  email: string = "";

  constructor(private router: Router, private tokenService: TokenService, private userService: UserService, public translate: TranslateService, private validationService: ValidationService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    const token = this.tokenService.getToken();
    this.email = this.currentUser.email;
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

  signOut(): void {
    this.tokenService.signOut();
    this.router.navigate(["home"]);
  }

  editProfile(): void {
    const token = this.tokenService.getToken();
    if (token !== null) {
      this.userService.setProfile(token, this.currentUser).subscribe(
        data => {
          if (this.currentUser.email !== this.email) {
            window.alert("Validate your new email");
          }
        },
        error => { }//Anet error handling
      );
    }
    else {
      //Anet error handling
    }
  }

  deleteProfile(): void {
    const token = this.tokenService.getToken();
    if (window.confirm('Are sure you want to delete this item ?')) {
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
  }

  getProfilePicture(): void {
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

  delProfilePicture(): void {
    const token = this.tokenService.getToken();
    if (token !== null) {
      this.userService.delPicture(token).subscribe(
        data => {
        },
        error => { }//Anet error handling
      );
    }
    else {
      //Anet error handling
    }
  }

  onUpload(): void {
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

  onFileSelected(event: any): void {
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

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  }

  passwordReset(): void {
    if (this.validationService.validateEmail(this.currentUser.email)) {
      this.authService.sendPasswdResetEmail(this.currentUser.email).subscribe(
        data => {
          window.alert("check your email");
        },
        err => {
          //Anet error handling
        }
      );
    }
    else {
      //Anet error handling
    }
  }
}
