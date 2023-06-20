import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private apiUrl: string;
  constructor(private http: HttpClient) {
    console.log('environment.apiUrl', environment.apiUrl);
    this.apiUrl = environment.apiUrl;
  }


}
