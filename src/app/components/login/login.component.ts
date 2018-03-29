import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from "../../shared/services/user.service";
import { StorageService } from "../../shared/services/storage.service";
import { Message } from 'primeng/components/common/api';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [
        UserService,
        StorageService
    ]
})
export class LoginComponent implements OnInit {
    appName: 'EVOLVE';
    loginForm: FormGroup;
    msgs: Message[] = [];

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private storageService: StorageService
    ) { }

    ngOnInit() {
        if (this.userService.isLogined()) {
            // Redirect to index if user login
            this.router.navigate(['index']);
        }

        this.loginForm = this.fb.group({
            'username': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'rememberMe': new FormControl(true)
        });
    }

    public login(value) {
        this.userService.login(value.username, value.password, value.rememberMe).subscribe(
            data => {
                this.msgs = [];
                this.msgs.push({severity: 'success', detail: 'Login success.'});
                this.storageService.add('user', JSON.stringify(data));
                this.router.navigate(['index']);
            },
            err => {
                this.msgs = [];
                this.msgs.push({severity: 'error', detail: 'Incorrect username or password.'});
                console.log(err.toString());
            }
        );
    }
}
