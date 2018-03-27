import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from "../../shared/services/user.service";
import { MessageService } from "primeng/components/common/messageservice";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [
        UserService,
        MessageService
    ]
})
export class LoginComponent implements OnInit {
    appName: 'EVOLVE';
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private messageService: MessageService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            'username': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'rememberMe': new FormControl(true)
        });
    }

    public login(value) {
        console.log(111, value);
        this.userService.login(value.username, value.password, value.rememberMe).subscribe(
            data => {
                console.log(data);
            },
            err => this.showMessage('error', err.toString())
        );
    }

    private showMessage(type: string, message: string) {
        this.messageService.add({
            severity: type,
            summary: type.charAt(0).toUpperCase() + type.slice(1),
            detail: message
        });
    }
}
