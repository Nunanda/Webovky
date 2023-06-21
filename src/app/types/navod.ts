import { SafeUrl } from "@angular/platform-browser"

export type Instruction = {
  id: number,
  title: string,
  difficulty: Difficulty,
  link: string,
  private: boolean,
  shortcuts: string,
  steps: Array<Step>,
}

export type Step = {
  id: number,
  title: string,
  link: string,
  description: Array<string>,
}

export enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}