import { Component, OnInit } from '@angular/core';
import { InstructionService } from 'src/app/service';
import { Instruction, Step } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navody-detail',
  templateUrl: './navody-detail.component.html',
  styleUrls: ['./navody-detail.component.css']
})
export class NavodyDetailComponent implements OnInit {

  nazev: any;
  popis: Step[];
  navod: any;
  index: number;
  index0: number;
  popisy: string[];
  intervalId: any;
  timer: number = 0;
  element: NodeListOf<HTMLElement> | undefined;
  element0: NodeListOf<HTMLElement> | undefined;
  api: string = environment.apiUrl;

  constructor(private instructionService: InstructionService) {
    this.nazev = localStorage.getItem("nazev");
    this.popis = new Array<Step>();
    this.navod = new Array<Instruction>();
    this.index = 0;
    this.index0 = 0;
    this.popisy = new Array<string>();
  }

  ngOnInit(): void {
    this.navod = this.instructionService.getInstructionsByTitle(this.nazev);
    this.popis = this.instructionService.getStepsByTitle(this.nazev);
    this.popisy = this.popis[this.index].descriptionCz;
    this.element = document.getElementsByName("button0");
    this.element0 = document.getElementsByName("element0");
  }

  ngDoCheck(): void {
    this.navod = this.instructionService.getInstructionsByTitle(this.nazev);
    this.popis = this.instructionService.getStepsByTitle(this.nazev);
    this.popisy = this.popis[this.index].descriptionCz;
    this.element = document.getElementsByName("button0");
    this.element0 = document.getElementsByName("element0");
  }

  setindex(item: Step): void {
    this.index = this.popis.indexOf(item);
    this.popisy = this.popis[this.index].descriptionCz;
    this.index0 = 0;
    if (this.element?.item(this.index).className === "finished") {
      this.element0?.forEach(x => x.setAttribute("style", "text-decoration: line-through; color: gray"));
      this.index0 = this.popisy.length;
    }
    else if (this.element?.item(this.index).className === "unfinished") {
      this.element0?.forEach(x => x.removeAttribute("style"));
      this.index0 = 0;
    }
  }

  get minutes(): number {
    return Math.floor(this.timer / 60) % 60;
  }

  get seconds(): string {
    return ("00" + this.timer % 60).slice(-2);
  }

  time(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
    else if (!this.intervalId) {
      this.intervalId = setInterval(() => this.timer++, 1000);
    }
  }

  finished(): void {
    if (this.element?.item(this.index).className === "finished") {
      this.element?.item(this.index).classList.remove("finished");
      this.element?.item(this.index).classList.add("unfinished");
      this.element0?.forEach(x => x.removeAttribute("style"));
      this.index0 = 0;
    }
    else if (this.element?.item(this.index).className === "unfinished") {
      this.element?.item(this.index).classList.remove("unfinished");
      this.element?.item(this.index).classList.add("finished");
      this.element0?.forEach(x => x.setAttribute("style", "text-decoration: line-through; color: gray"));
      this.index0 = this.popisy.length;
    }
  }

  previousIndex(): void {
    if (this.index0 - 1 >= 0) {
      if (this.index0 >= this.popisy.length) {
        this.element?.item(this.index).classList.remove("finished");
        this.element?.item(this.index).classList.add("unfinished");
        this.element0?.item(this.index0 - 1).removeAttribute("style");
        this.index0--;
      }
      else if ((this.element0?.item(this.index0 - 1).getAttribute("style") != null)) {
        this.element0?.item(this.index0 - 1).removeAttribute("style");
        this.index0--;
      }
    }
  }

  nextIndex(): void {
    if (this.index0 + 1 == this.popisy.length) {
      this.finished();
    }
    else if (this.index0 < this.popisy.length) {
      if ((this.element0?.item(this.index0).getAttribute("style") == null)) {
        this.element0?.item(this.index0).setAttribute("style", "text-decoration: line-through; color: gray");
        this.index0++;
      }
    }
  }
}
