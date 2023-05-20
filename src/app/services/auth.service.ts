import { Injectable } from '@angular/core';
import { loginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7085/api/auth/';

  constructor(private httpClient:HttpClient) { }

  login(user:loginModel){
    return this.httpClient.post(this.apiUrl+"login", loginModel);
  }
}
