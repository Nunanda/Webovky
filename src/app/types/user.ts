import { Instruction, Language, PremiumInstruction } from ".";

export type UserPublic = {
  id: string,
  username: string,
  link: string,
}

export type UserPublicDetail = {
  id: string,
  username: string,
  nick: string,
  bio: string,
  link: string,
  followerCount: number,
  followeeCount: number,
  instructions?: Instruction[] | PremiumInstruction[] | null,
}

export type User = {
  id: string,
  email: string,
  username: string,
  wrappedDEK: string,
  initializationVector: string,
  kekSalt: string,
  language: Language,
  darkmode: boolean,
  date: Date,
  nick?: string | null,
  bio?: string | null,
  link?: string | null,
  favorites?: number[],
}

export type UserLink = {
  id: string,
  followerId: string,
  followeeId: string,
}