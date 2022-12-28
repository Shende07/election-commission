import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpClientModule,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TableServiceService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get(`${this.url}/dists/`);
  }
}
