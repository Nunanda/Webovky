import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Instruction, Progress, Step, User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {
  private readonly apiUrl = environment.apiUrl;
  private readonly timeoutDuration = 10000;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`,
        'Content-Type': 'application/json'
      })
    }
  }

  getUser(): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/users/{id}`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  patchUser(user: Omit<User, 'id' | 'wrappedDEK' | 'initializationVector' | 'kekSalt' | 'data' | 'link'>): Observable<any> {
    const request = this.http.patch(`${this.apiUrl}/users/{id}`, user,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteUser(password: string): Observable<any> {
    const request = this.http.delete(`${this.apiUrl}/users/{id}/${password}`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  uploadProfilePicture(formData: FormData): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/users/{id}/profile-picture`, formData,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteProfilePicture(): Observable<any> {
    const request = this.http.delete(`${this.apiUrl}/users/{id}/profile-picture`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  createProgress(progress: Omit<Progress, 'id'>): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/users/{id}/progresses/{progressId}`, progress,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  patchProgress(instructionId: number, progress: Omit<Progress, 'id' | 'instructionId' | 'userId'>): Observable<any> {
    const request = this.http.patch(`${this.apiUrl}/users/{id}/progresses/${instructionId}`, progress,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteProgress(instructionId: number): Observable<any> {
    const request = this.http.delete(`${this.apiUrl}/users/{id}/progresses/${instructionId}`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getProgress(instructionId: number): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/users/{id}/progresses/${instructionId}`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  followUser(followeeId: number): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/users/{id}/follow/${followeeId}`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  unfollowUser(followeeId: number): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/users/{id}/unfollow/${followeeId}`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  createInstruction(instruction: Omit<Instruction, 'id' | 'userId' | 'date' | 'link' | 'deleteHash'>, key?: string): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/users/{id}/instructions/{instructionId}`, {
      instruction,
      key
    }, this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  patchInstruction(instruction: Omit<Instruction, 'id' | 'link' | 'premium' | 'date' | 'user' | 'steps'>, instructionId: number): Observable<any> {
    const request = this.http.patch(`${this.apiUrl}/users/{id}/instructions/${instructionId}`, instruction,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteInstruction(instructionId: number): Observable<any> {
    const request = this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getUsersInstructions(): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/users/{id}/user-instructions`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  uploadInstructionPicture(instructionId: number, formData: FormData): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/users/{id}/instructions/${instructionId}/picture`, formData,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteInstructionPicture(instructionId: number): Observable<any> {
    const request = this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}/picture`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  setPremiumInstruction(instructionId: number, key: string, premium: boolean): Observable<any> {
    const request = this.http.patch(`${this.apiUrl}/users/{id}/instructions/${instructionId}`, {
      key,
      premium,
    }, this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  setPremium(instructionId: number, userId: number, key: string): Observable<any> {
    const request = this.http.patch(`${this.apiUrl}/authorizate-for-premium-instruction/${instructionId}/${userId}`, key,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  createStep(instructionId: number, step: Omit<Step, 'id' | 'link' | 'instructionId'>): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/{stepId}`, step,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  patchStep(instructionId: number, stepId: number, step: Omit<Step, 'id' | 'link' | 'instructionId'>): Observable<any> {
    const request = this.http.patch(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}`, step,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteStep(instructionId: number, stepId: number): Observable<any> {
    const request = this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getSteps(instructionId: number): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/users/{id}/instructions/${instructionId}/instruction-steps`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  uploadStepsPicture(instructionId: number, stepId: number, formData: FormData): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}/picture`, formData,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteStepPicture(instructionId: number, stepId: number): Observable<any> {
    const request = this.http.delete(`${this.apiUrl}/users/{id}/instructions/${instructionId}/steps/${stepId}/picture`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getPremiumInstructionDetail(instructionId: number): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/premium-instructions/${instructionId}/detail`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
