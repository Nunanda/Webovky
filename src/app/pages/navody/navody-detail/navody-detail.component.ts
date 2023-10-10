import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructionService } from 'src/app/service';
import { Instruction, Step } from 'src/app/types';

@Component({
  selector: 'app-navody-detail',
  templateUrl: './navody-detail.component.html',
  styleUrls: ['./navody-detail.component.css']
})
export class NavodyDetailComponent implements OnInit {

  nazev: string | undefined;
  navod: Instruction | undefined | void;
  krokyNavodu: Step[] | undefined;
  index: number = 0;

  isRunning: boolean = false;
  timer: number = 0;

  constructor(private instructionService: InstructionService, private router: Router) { }

  ngOnInit(): void {
    this.loadNavodData();
  }

  ngDoCheck(): void {
    this.loadNavodData();
  }

  setIndex(id: string, instructionId: string): void {
    const index = this.instructionService.getIndexById(id, instructionId);
    if (index !== undefined) {
      this.index = index;
    }
  }

  get minutes(): number {
    return Math.floor(this.timer / 60) % 60;
  }

  get seconds(): string {
    return ("00" + this.timer % 60).slice(-2);
  }

  startStopTimer(): void {
    if (this.isRunning) {
      this.isRunning = false;
    } else {
      this.isRunning = true;
      this.time();
    }
  }

  time(): void {
    const timerInterval = setInterval(() => {
      if (this.isRunning) {
        this.timer++;
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  
  finished(): void {
  }

  previousIndex(): void {
  }

  nextIndex(): void {
  }

  private loadNavodData(): void {
    this.nazev = this.router.url.split('/')[3];
    this.navod = this.instructionService.getInstructionsById(this.nazev);
    this.krokyNavodu = this.instructionService.getStepsById(this.nazev);
  }
}
