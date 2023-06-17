import { Injectable } from '@angular/core';
import { Instruction, Step } from 'src/app/types';
import { TranslateService } from '@ngx-translate/core';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

const poleInstructionyCZ: Array<Instruction> = [
];

const poleInstructionyEN: Array<Instruction> = [
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

@Injectable({
  providedIn: 'root'
})
export class InstructionService {

  private socket!: Socket;

  constructor(private translate: TranslateService) {
    this.socket = io(environment.socketUrl);
    this.socket.on('message', (message) => {
      if (message) {
        message.forEach((value: Instruction) => {
          poleInstructionyCZ.push(value)
        }
      );
      poleInstructionyCZ.forEach(instruction => {
        const matchedShortcuts: Set<string> = new Set();
        instruction.shortcuts = "";
        instruction.steps.forEach(step => {
          step.description.forEach(description => {
            Object.values(ShortcutEnumCZ).forEach(shortcut => {
              if (description.includes(shortcut)) {
                matchedShortcuts.add(shortcut);
              }
            });
          })
        });
        instruction.shortcuts = Array.from(matchedShortcuts).join(', ');
      });
      } else {
        this.destroy();
      }
    }
    );
  }

  public destroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  public getInstructionsByTitle(title: string): Instruction | void {
    if (this.translate.currentLang === "EN") {
      return poleInstructionyEN.find(element => element.title == title);
    }
    else {
      return poleInstructionyCZ.find(element => element.title == title);
    }
  }

  public getAllInstructions(): Array<Instruction> {
    if (this.translate.currentLang === "EN") {
      return poleInstructionyEN;
    }
    else {
      return poleInstructionyCZ;
    }
  }

  public getStepsByTitle(title: string): Array<Step> {
    if (this.translate.currentLang === "EN") {
      let index = poleInstructionyEN.findIndex(x => x.title == title);
      return poleInstructionyEN[index].steps;
    }
    else {
      const index = poleInstructionyCZ.findIndex(x => x.title == title);
      return poleInstructionyCZ[index].steps;
    }
  }

  public getAllTitles(): Array<string> {
    if (this.translate.currentLang === "EN") {
      return poleInstructionyEN.map((item) => item.title);
    }
    else {
      return poleInstructionyCZ.map((item) => item.title);
    }
  }

}
