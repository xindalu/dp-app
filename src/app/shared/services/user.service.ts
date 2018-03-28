import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import { Auth } from "../models/auth";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    public login(username: string, password: string, rememberMe: boolean = false): Observable<Auth> {
        let params = new HttpParams()
            .set('LoginForm[username]', username)
            .set('LoginForm[password]', password)
            .set('LoginForm[rememberMe]', rememberMe ? '1' : '0');

        return this.http
            .post(`${environment.apiHost}/user/login`, params)
            .map(this.mapAuth)
            .pipe(catchError(this.handleErrorObservable));
    }

    private mapAuth(response: any): Auth {
        let data = response.data;

        return {
            userId: data.userId,
            userName: data.userName,
            email: data.email,
            accessToken: data.accessToken,
            accessPermissions: data.accessPermissions
        };
    }

    private handleErrorObservable(error: HttpErrorResponse | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
