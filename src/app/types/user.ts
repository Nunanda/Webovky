import { Instruction, Language, PremiumInstruction } from ".";

export type UserPublic = {
  id: string,
  username: string,
  link: string,
}

export type UserPublicDetail = UserPublic & {
  nick: string,
  bio: string,
  followerCount: number,
  followeeCount: number,
  instructions?: (Instruction | PremiumInstruction)[] | null,
}

export type User = UserPublic & {
  email: string,
  wrappedDEK: string,
  initializationVector: string,
  kekSalt: string,
  language: Language,
  darkmode: boolean,
  date: Date,
  nick?: string | null,
  bio?: string | null,
  favorites?: number[],
}

export type UserLink = {
  id: string,
  followerId: string,
  followeeId: string,
}