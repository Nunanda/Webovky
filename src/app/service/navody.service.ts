import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Difficulty, Instruction, Step } from 'src/app/types';

const poleInstructiony: Array<Instruction> = [
  {
    id: "sf45",
    titleCz: "HaroldCz",
    titleEn: "HaroldEn",
    difficulty: Difficulty.hard,
    premium: true,
    finished: true,
    date: new Date(),
    userId: "eg8eb8",
    steps: [
      {
        id: "rbsdb64",
        titleCz: "Hlava",
        titleEn: "Head",
        descriptionCz: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (6 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"],
        descriptionEn: ["Mr (8)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "Sc (6 rows)", "4Sc, Dec", "3Sc, Dec", "2Sc, Dec", "Sc, Dec", "SlSt"],
        instructionId: "sf45"
      },
      {
        id: "erb5",
        titleCz: "Spodní část krunýře",
        titleEn: "Bottom part of shell",
        descriptionCz: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po"],
        descriptionEn: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "SlSt"],
        instructionId: "sf45"
      }
    ]
  }
];

enum ShortcutEnumCZ {
  Řo = 'Řo',
  Po = 'Po',
  Ks = 'Ks',
  Pds = 'Pds',
  Ds = 'Ds',
  V = 'V',
  A = 'A',
  Mk = 'Mk',
}

enum ShortcutEnumEN {
  Ch = 'Ch',
  SlSt = 'SlSt',
  Sc = 'Sc',
  Hdc = 'Hdc',
  Dc = 'Dc',
  Inc = 'Inc',
  Dec = 'Dec',
  Mr = 'Mr',
}

const difficultyOrder = {
  easy: 1,
  medium: 2,
  hard: 3,
};

@Injectable({
  providedIn: 'root'
})
export class InstructionService {

  constructor(private translate: TranslateService) {
    poleInstructiony.forEach(instruction => {
      const matchedShortcutsCz: Set<string> = new Set();
      const matchedShortcutsEn: Set<string> = new Set();
      instruction.steps.forEach(step => {
        step.descriptionCz.forEach(description => {
          Object.values(ShortcutEnumCZ).forEach(shortcut => {
            if (description.includes(shortcut)) {
              matchedShortcutsCz.add(shortcut);
            }
          });
        });
        step.descriptionEn.forEach(description => {
          Object.values(ShortcutEnumEN).forEach(shortcut => {
            if (description.includes(shortcut)) {
              matchedShortcutsEn.add(shortcut);
            }
          });
        })
      });
      instruction.shortcutsCz = Array.from(matchedShortcutsCz).join(', ');
      instruction.shortcutsEn = Array.from(matchedShortcutsEn).join(', ');
    });
    poleInstructiony.sort((a, b) => {
      const difficultyA = difficultyOrder[a.difficulty];
      const difficultyB = difficultyOrder[b.difficulty];
      return difficultyA - difficultyB;
    });
  }

  public getInstructionsById(id: string): Instruction | void {
    return poleInstructiony.find(element => element.id == id);
  }

  public getAllInstructions(): Array<Instruction> {
    return poleInstructiony;
  }

  public getStepsById(id: string): Array<Step> {
    const index = poleInstructiony.findIndex(x => x.id == id);
    return poleInstructiony[index].steps;
  }

  public getIndexById(id: string, instructionId: string): number | undefined {
    const x = poleInstructiony.find((item) => item.id == instructionId);
    return x?.steps.findIndex((item) => item.id == id);
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
