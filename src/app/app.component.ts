import {Component, OnInit} from '@angular/core';

import { UserService } from "./shared/services/user.service";
import { StorageService } from "./shared/services/storage.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService, StorageService]
})
export class AppComponent implements OnInit{
    userLogined: boolean = false;

    constructor(
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userLogined = this.userService.isLogined();
    }
}
