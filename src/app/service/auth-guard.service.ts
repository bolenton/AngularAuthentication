import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate{ //use this interface to implement AuthGuard
  constructor(private authService: AuthService, private router: Router) { }

  // This method checks if a user is logged in. if not than we redirected them to the proper page
  // Also add the AuthGard class as the third paremeter in the app.module.ts routes defination. like this:
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  canActivate(route, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isLoggedIn()) return true;

    // we want to give the ability for the user to be navigated back to their returnUrl
    this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
    return false;
  }
}
