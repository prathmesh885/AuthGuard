import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})

export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
        return this.authService.isAuthnticated()
            .then((isAuth: boolean) => {
                if (isAuth) {
                    return true;
                } else {
                    this.router.navigate(['/'])
                    return false
                }
            })
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
        // return this.authService.isAuthnticated()
        //     .then((isAuth: boolean) => {
        //         if (isAuth) {
        //             return true;
        //         } else {
        //             this.router.navigate(['/'])
        //             return false
        //         }
        //     })
        return this.canActivate(route, state)
    }





}