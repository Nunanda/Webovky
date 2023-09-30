import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InstructionService } from 'src/app/service';
import { Instruction } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.component.html',
  styleUrls: ['./navody.component.css']
})
export class NavodyComponent implements OnInit {

  navod: Array<Instruction> = new Array<Instruction>;
  api: string = environment.apiUrl;

  constructor(private instructionService: InstructionService, private router: Router) { }

  ngOnInit(): void {
    this.navod = this.instructionService.getAllInstructions();
  }

  ngDoCheck(): void {
    this.navod = this.instructionService.getAllInstructions();
  }

  public getPopisy(nazev: string): void {
    localStorage.setItem("nazev", nazev);
    this.router.navigate(["navody/navody-detail/"]);
  }
}
