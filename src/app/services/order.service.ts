import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from "angular2-jwt";

@Injectable()
export class OrderService {

  constructor(private http: AuthHttp) {
  }

  getOrders() { 

    // BECAUSE WE ARE USING AUTHHTTP INSTEAD OS STANDARED ANGULAR HTTP,
    // WE DO NOT HAVE TO PASS IN THE TOKEN IN THE HEADER, THE AUTHHTTP
    // JWT LIBARARY HANDLES THAT FOR US!
     
    // let headers = new Headers();
    // let token = localStorage.getItem("token");
    // headers.append('Authorization', 'Bearer ' + token);
    // let options = new RequestOptions({ headers: headers })

    return this.http.get('/api/orders')
      .map(response => response.json());
  }
}
