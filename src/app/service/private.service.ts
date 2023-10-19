import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Instruction, Progress, Step, User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getHttpOptions(): {headers: HttpHeaders} {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`,
        'Content-Type': 'application/json'
      })
    }
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/{id}`,
      this.getHttpOptions());
  }

  patchUser(user: Omit<User, 'id' | 'wrappedDEK' | 'initializationVector' | 'kekSalt' | 'data' | 'link'>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}`, user,
      this.getHttpOptions());
  }

  deleteUser(password: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/${password}`,
      this.getHttpOptions());
  }

  uploadProfilePicture(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/profile-picture`, formData,
      this.getHttpOptions());
  }

  deleteProfilePicture(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/profile-picture`,
      this.getHttpOptions());
  }

  createProgress(progress: Omit<Progress, 'id'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/progresses/{progressId}`, progress,
      this.getHttpOptions());
  }

  patchProgress(instructionId: number, progress: Omit<Progress, 'id' | 'instructionId' | 'userId'>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}/progresses/${instructionId}`, progress,
      this.getHttpOptions());
  }

  deleteProgress(instructionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/progresses/${instructionId}`,
      this.getHttpOptions());
  }

  getProgress(instructionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/{id}/progresses/${instructionId}`,
      this.getHttpOptions());
  }

  followUser(followeeId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/follow/${followeeId}`,
      this.getHttpOptions());
  }

  unfollowUser(followeeId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/unfollow/${followeeId}`,
      this.getHttpOptions());
  }

  createInstruction(instruction: Omit<Instruction, 'id' | 'userId' | 'date' | 'link' | 'deleteHash'>, key?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/instructions/{instructionId}`, {
      instruction,
      key
    }, this.getHttpOptions());
  }

  patchInstruction(instruction: Omit<Instruction, 'id' | 'link' | 'premium' | 'date' | 'user' | 'steps'>, instructionId: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}/instructions/${instructionId}`, instruction,
      this.getHttpOptions());
  }

  deleteInstruction(instructionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}`,
      this.getHttpOptions());
  }

  getUsersInstructions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/{id}/user-instructions`,
      this.getHttpOptions());
  }

  uploadInstructionPicture(instructionId: number, formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/instructions/${instructionId}/picture`, formData,
      this.getHttpOptions());
  }

  deleteInstructionPicture(instructionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}/picture`,
      this.getHttpOptions());
  }

  setPremiumInstruction(instructionId: number, key: string, premium: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}/instructions/${instructionId}`, {
      key,
      premium,
    }, this.getHttpOptions());
  }

  setPremium(instructionId: number, userId: number, key: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/authorizate-for-premium-instruction/${instructionId}/${userId}`, key,
      this.getHttpOptions());
  }

  createStep(instructionId: number, step: Omit<Step, 'id' | 'link' | 'instructionId'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/{stepId}`, step,
      this.getHttpOptions());
  }

  patchStep(instructionId: number, stepId: number, step: Omit<Step, 'id' | 'link' | 'instructionId'>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}`, step,
      this.getHttpOptions());
  }

  deleteStep(instructionId: number, stepId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}`,
      this.getHttpOptions());
  }

  getSteps(instructionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/{id}/instructions/${instructionId}/instruction-steps`,
      this.getHttpOptions());
  }

  uploadStepsPicture(instructionId: number, stepId: number, formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}/picture`, formData,
      this.getHttpOptions());
  }

  deleteStepPicture(instructionId: number, stepId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}/picture`,
      this.getHttpOptions());
  }

  getPremiumInstructionDetail(instructionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/premium-instructions/${instructionId}/detail`,
      this.getHttpOptions());
  }
}
