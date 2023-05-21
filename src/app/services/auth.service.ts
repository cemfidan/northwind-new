import { Injectable } from '@angular/core';
import { loginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7085/api/auth/';

  constructor(private httpClient:HttpClient) { }

  login(user:loginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login", user);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }
}
