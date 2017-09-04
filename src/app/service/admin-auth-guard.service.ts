import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AdminAuthGuard implements CanActivate{
  constructor(private router: Router, private authService: AuthService) { }


  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.currentUser && this.authService.currentUser.admin)
       return true;

    this.router.navigate(['/no-access'])
    return false;
  }
}
