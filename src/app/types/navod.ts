export type PremiumInstruction = {
  id: string,
  titleCz: string,
  titleEn: string,
  difficulty: Difficulty,
  link?: string | null,
  premium: boolean,
  finished?: boolean,
  date: Date,
  userId: string,
  shortcutsCz?: string | null;
  shortcutsEn?: string | null;
}

export type Instruction = PremiumInstruction & {
  premium?: boolean,
  steps: Step[],
}

export type Step = {
  id: string,
  titleCz: string,
  titleEn: string,
  descriptionCz: string[],
  descriptionEn: string[],
  link?: string | null,
  instructionId: string,
}

export enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}