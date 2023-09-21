export type PremiumInstruction = {
  id: number,
  titleCz: string,
  titleEn: string,
  difficulty: Difficulty,
  link?: string | null,
  private: boolean,
  premium: boolean,
  date: Date,
  userId: number,
}

export type Instruction = {
  id: number,
  titleCz: string,
  titleEn: string,
  difficulty: Difficulty,
  link?: string | null,
  private: boolean,
  premium: boolean,
  date: Date,
  userId: number,
  steps: Step[],
}

export type Step = {
  id: number,
  titleCz: string,
  titleEn: string,
  descriptionCz: string[],
  descriptionEn: string[],
  link?: string | null,
  instructionId: number,
}

export enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}