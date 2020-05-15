import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.user$.pipe(
            map(user => {
                if (user) {
                    return true;
                }

                this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
                return false;
            })
        );
    }
}
