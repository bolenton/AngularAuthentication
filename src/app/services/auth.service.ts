import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from "angular2-jwt/angular2-jwt";

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response => {
        let result = response.json();
        if (result = response.json()){
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem("token");
  }

  isLoggedIn() { 
    return tokenNotExpired();
    
    // tokemNotExpired runs the below code internally!

    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem("token");

    // if(!token)
    //   return false;

    // let isExpired = jwtHelper.isTokenExpired(token);

    // return !isExpired;
  }

  get currentUser(){
    let token = localStorage.getItem("token");
    if (!token) return false;

    return new JwtHelper().decodeToken(token);
  }
}

