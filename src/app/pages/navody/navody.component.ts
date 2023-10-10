import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructionService } from 'src/app/service';
import { Instruction } from 'src/app/types';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.component.html',
  styleUrls: ['./navody.component.css']
})
export class NavodyComponent implements OnInit {

  navod: Instruction[] | undefined;

  constructor(private instructionService: InstructionService, private router: Router) { }

  ngOnInit(): void {
    this.loadNavody();
  }

  ngDoCheck(): void {
    this.loadNavody();
  }

  goKroky(nazev: string): void {
    this.router.navigate(["navody/navody-detail/" + nazev]);
  }

  loadNavody(): void {
    this.navod = this.instructionService.getAllInstructions();
  }
}
