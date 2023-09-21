import { Instruction, Language, PremiumInstruction } from ".";

export type UserPublic = {
  id: number,
  username: string,
  link: string,
}

export type UserPublicDetail = {
  id: number,
  username: string,
  nick: string,
  bio: string,
  link: string,
  followerCount: number,
  followeeCount: number,
  instructions: Instruction[] | PremiumInstruction[],
}

export type User = {
    id: number,
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
  id: number,
  followerId: number,
  followeeId: number,
}