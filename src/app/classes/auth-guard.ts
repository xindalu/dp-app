import { CanActivate } from "@angular/router";

export class AuthGuard implements CanActivate {
    canActivate() {
        console.log(111, 'auth guard');
        return true;
    }
}
