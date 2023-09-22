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
  private readonly httpOptions = {
    headers: new HttpHeaders()
  };
  private readonly token: string | null;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.token = this.tokenService.getToken();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      })
    };
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/{id}`,
      this.httpOptions);
  }

  patchUser(user: Omit<User, 'id' | 'wrappedDEK' | 'initializationVector' | 'kekSalt' | 'data' | 'link'>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}`, user,
      this.httpOptions);
  }

  deleteUser(password: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/${password}`,
      this.httpOptions);
  }

  uploadProfilePicture(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/profile-picture`, formData,
      this.httpOptions);
  }

  deleteProfilePicture(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/profile-picture`,
      this.httpOptions);
  }

  createProgress(progress: Omit<Progress, 'id'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/progresses/{progressId}`, progress,
      this.httpOptions);
  }

  patchProgress(instructionId: number, progress: Omit<Progress, 'id' | 'instructionId' | 'userId'>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}/progresses/${instructionId}`, progress,
      this.httpOptions);
  }

  deleteProgress(instructionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/progresses/${instructionId}`,
      this.httpOptions);
  }

  getProgress(instructionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/{id}/progresses/${instructionId}`,
      this.httpOptions);
  }

  followUser(followeeId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/follow/${followeeId}`,
      this.httpOptions);
  }

  unfollowUser(followeeId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/unfollow/${followeeId}`,
      this.httpOptions);
  }

  createInstruction(instruction: Omit<Instruction, 'id' | 'userId' | 'date' | 'link' | 'deleteHash'>, key?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/instructions/{instructionId}`, {
      instruction,
      key
    }, this.httpOptions);
  }

  patchInstruction(instruction: Omit<Instruction, 'id' | 'link' | 'premium' | 'date' | 'user' | 'steps'>, instructionId: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}/instructions/${instructionId}`, instruction,
      this.httpOptions);
  }

  deleteInstruction(instructionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}`,
      this.httpOptions);
  }

  getUsersInstructions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/{id}/user-instructions`,
      this.httpOptions);
  }

  uploadInstructionPicture(instructionId: number, formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/instructions/${instructionId}/picture`, formData,
      this.httpOptions);
  }

  deleteInstructionPicture(instructionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}/picture`,
      this.httpOptions);
  }

  setPremiumInstruction(instructionId: number, key: string, premium: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}/instructions/${instructionId}`, {
      key,
      premium,
    }, this.httpOptions);
  }

  setPremium(instructionId: number, userId: number, key: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/authorizate-for-premium-instruction/${instructionId}/${userId}`, key,
      this.httpOptions);
  }

  createStep(instructionId: number, step: Omit<Step, 'id' | 'link' | 'instructionId'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/{stepId}`, step,
      this.httpOptions);
  }

  patchStep(instructionId: number, stepId: number, step: Omit<Step, 'id' | 'link' | 'instructionId'>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}`, step,
      this.httpOptions);
  }

  deleteStep(instructionId: number, stepId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}`,
      this.httpOptions);
  }

  getSteps(instructionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/{id}/instructions/${instructionId}/instruction-steps`,
      this.httpOptions);
  }

  uploadStepsPicture(instructionId: number, stepId: number, formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}/picture`, formData,
      this.httpOptions);
  }

  deleteStepPicture(instructionId: number, stepId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}/picture`,
      this.httpOptions);
  }

  getPremiumInstructionDetail(instructionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/premium-instructions/${instructionId}/detail`,
      this.httpOptions);
  }
}
