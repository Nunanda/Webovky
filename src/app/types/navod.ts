export type PremiumInstruction = {
  id: string,
  titleCz: string,
  titleEn: string,
  difficulty: Difficulty,
  link?: string | null,
  private: boolean,
  premium: boolean,
  date: Date,
  userId: string,
  shortcutsCz?: string | null;
  shortcutsEn?: string | null;
}

export type Instruction = {
  id: string,
  titleCz: string,
  titleEn: string,
  difficulty: Difficulty,
  link?: string | null,
  private: boolean,
  premium: boolean,
  date: Date,
  userId: string,
  steps: Step[],
  shortcutsCz?: string | null;
  shortcutsEn?: string | null;
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