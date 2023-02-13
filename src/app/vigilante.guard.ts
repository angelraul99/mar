import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router){
  }
  
  redirect(flag: boolean): boolean {
    if( !flag){
      this.router.navigate(['/', 'login'])
    }
    return flag;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.redirect(!!localStorage.getItem('token'));

  } 
  
}
