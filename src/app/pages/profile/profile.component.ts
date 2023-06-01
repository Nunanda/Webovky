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
  imageURL!: string;
  data: boolean = false;
  email: string = "";

  constructor(private router: Router, private tokenService: TokenService, private userService: UserService, public translate: TranslateService, private validationService: ValidationService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.currentUser = this.tokenService.getUser();
      this.email = this.currentUser.email;
      this.imageURL = this.tokenService.getPicture() || "assets/icon/account.svg";
    }
    else {
      this.signOut();
      this.router.navigate(["prihlaseni"]);
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

  delProfilePicture(): void {
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

  onUpload(): void {
    const token = this.tokenService.getToken();
    if (token !== null && this.imageURL !== "assets/icon/account.svg") {
      const formData = new FormData();
      formData.append('image', this.dataURItoBlob(this.imageURL));
      this.userService.setPicture(token, formData).subscribe(
        data => {
          this.blobToBase64(this.dataURItoBlob(this.imageURL), (base64String) => {
            this.tokenService.savePicture(base64String);
          });
          this.imageURL = this.tokenService.getPicture() || "assets/icon/account.svg";
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
      this.blobToBase64(file, (base64String) => {
        this.tokenService.savePicture(base64String);
      });
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageURL = reader.result as string;
      };
    }
    else {
      this.data = true;
      this.imageURL = "assets/icon/account.svg";
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

  blobToBase64(blob: Blob, callback: (base64String: string) => void) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      callback(base64String);
    };
    reader.readAsDataURL(blob);
  }
}
