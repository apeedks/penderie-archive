import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';
import { User } from './services/user';

@Injectable()
export class AuthGuard implements CanActivate {
  myuser: User;
  constructor(private router: Router,private authserv: AuthenticationService) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
	  
     return this.authserv.adminsession().map((response: Response) =>  {
            console.log(response.status);
			let user:User;
			user = response.json();
			
			if (user.usertype=='Member') {
				localStorage.setItem('user', JSON.stringify(user));
                return true;
            }
			else
			{
				return false;
			
			}
        }).catch((err: Response) => {
			
			// The err.statusText is empty if server down (err.type === 3)
			//console.log((err.statusText || "Can't join the server."));
			/// Really usefull. The app can't catch this in "(err)" closure
			//reject((err.statusText || "Can't join the server."));
			// This return is required to compile but unuseable in your app
			this.router.navigateByUrl('/home') ;
			
			return Observable.throw(false);
        });
  }
}
