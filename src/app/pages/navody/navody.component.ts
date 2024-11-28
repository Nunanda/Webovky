import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { InstructionService } from 'src/app/service';
import { Instruction } from 'src/app/types';

@Component({
  selector: 'app-navody',
  standalone: false,
  templateUrl: './navody.component.html',
  styleUrls: ['./navody.component.css']
})
export class NavodyComponent implements OnInit {

  navod: Instruction[] | undefined;

  constructor(private instructionService: InstructionService, private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.loadNavody();
  }

  ngDoCheck(): void {
    this.loadNavody();
  }

  loadNavody(): void {
    this.navod = this.instructionService.getAllInstructions();
  }

  goKroky(nazev: string): void {
    this.router.navigate(["navody/navody-detail/" + nazev]);
  }

  getTitle(navod: Instruction): string {
    return this.translate.currentLang === 'CZ' ? navod.titleCz : navod.titleEn;
  }

  getShortcuts(navod: Instruction): string | null | undefined {
    return this.translate.currentLang === 'CZ' ? navod.shortcutsCz : navod.shortcutsEn;
  }
}
