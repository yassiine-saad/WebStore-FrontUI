import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}
