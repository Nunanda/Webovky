import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  timer: number = 0;
  isRunning: boolean = false;

  constructor(private instructionService: InstructionService, private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.loadNavodData();
  }

  ngDoCheck(): void {
    this.loadNavodData();
  }

  loadNavodData(): void {
    this.nazev = this.router.url.split('/')[3];
    this.navod = this.instructionService.getInstructionsById(this.nazev);
    this.krokyNavodu = this.instructionService.getStepsById(this.nazev);
  }

  getTitle(navod: Instruction | Step): string {
    return this.translate.currentLang === 'CZ' ? navod.titleCz : navod.titleEn;
  }

  getShortcuts(navod: Instruction): string | null | undefined {
    return this.translate.currentLang === 'CZ' ? navod.shortcutsCz : navod.shortcutsEn;
  }

  getStepsDescription(step: Step): string[] {
    return this.translate.currentLang === 'CZ' ? step.descriptionCz : step.descriptionEn;
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
      const timerInterval = setInterval(() => {
        if (this.isRunning) {
          this.timer++;
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
    }
  }

  finished(): void {
  }

  previousIndex(): void {
  }

  nextIndex(): void {
  }
}
