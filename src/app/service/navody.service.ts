import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Instruction, Step } from 'src/app/types';

const poleInstructiony: Array<Instruction> = [
];

@Injectable({
  providedIn: 'root'
})
export class InstructionService {

  constructor(private translate: TranslateService) {
  }

  public getInstructionsByTitle(title: string): Instruction | void {
    if (this.translate.currentLang === "EN") {
      return poleInstructiony.find(element => element.titleEn == title);
    }
    else {
      return poleInstructiony.find(element => element.titleCz == title);
    }
  }

  public getAllInstructions(): Array<Instruction> {
    return poleInstructiony;
  }

  public getStepsByTitle(title: string): Array<Step> {
    if (this.translate.currentLang === "EN") {
      let index = poleInstructiony.findIndex(x => x.titleEn == title);
      return poleInstructiony[index].steps;
    }
    else {
      const index = poleInstructiony.findIndex(x => x.titleCz == title);
      return poleInstructiony[index].steps;
    }
  }

  public getAllTitles(): Array<string> {
    if (this.translate.currentLang === "EN") {
      return poleInstructiony.map((item) => item.titleEn);
    }
    else {
      return poleInstructiony.map((item) => item.titleCz);
    }
  }

}
