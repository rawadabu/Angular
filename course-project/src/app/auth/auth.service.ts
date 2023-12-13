import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Optional! best practice
interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    // WE WILL FIND RESPONSE DATA IN THE <AuthResponseData>
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6mmi_NQeI1EsWwIJ7c-XLj4kNd-kW0vg',
      { email: email, password: password, returnSecureToken: true }
    );
  }
}
