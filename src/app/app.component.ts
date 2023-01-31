import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  element: HTMLElement | null;
  element1: HTMLElement | null;

  constructor(private router: Router) {
    this.element = document.getElementById("mySidenav");
    this.element1 = document.getElementById("main");
  }
  title = 'Webovky';
  ngOnInit(): void {
    this.router.navigate(['home']);
    this.element = document.getElementById("mySidenav");
    this.element1 = document.getElementById("main");
    this.myFunction();
  }

  public openNav() {
    this.element?.setAttribute("style", "width: 250px");
    this.element1?.setAttribute("style", "marginLeft: 250px");
  }

  public closeNav() {
    this.element?.setAttribute("style", "width: 0");
    this.element1?.setAttribute("style", "marginLeft: 0");
  }

  public myFunction() {
    /*var dropdown = document.getElementsByClassName("dropdown-btn");
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }*/
  }
}
