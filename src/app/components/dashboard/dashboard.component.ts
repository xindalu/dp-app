import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { UserService } from "../../shared/services/user.service";
import { StorageService } from "../../shared/services/storage.service";
import { ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [
        UserService,
        ConfirmationService,
        StorageService
    ]
})
export class DashboardComponent implements OnInit {
    title: 'EVOLVE';
    items: MenuItem[];

    constructor(
        private router: Router,
        private userService: UserService,
        private confirmationService: ConfirmationService,
        private storageService: StorageService
    ) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Dashboard',
                icon: 'fa-dashboard',
                routerLink: ['/dashboard']
            },
            {
                label: 'Admin',
                icon: 'fa-cog',
                routerLink: ['/admin']
            },
            {
                label: 'DCC',
                icon: 'fa-file',
                routerLink: ['/dcc']
            },
            {
                label: 'ERP',
                icon: 'fa-cubes',
                routerLink: ['/erp']
            },
            {
                label: 'FIN',
                icon: 'fa-money',
                routerLink: ['/fin']
            },
            {
                label: 'HRA',
                icon: 'fa-users',
                routerLink: ['/hra']
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'File',
                        icon: 'fa-file-o',
                        items: [{
                            label: 'New',
                            icon: 'fa-plus',
                            items: [
                                {label: 'Project'},
                                {label: 'Other'},
                            ]
                        },
                            {label: 'Open'},
                            {separator: true},
                            {label: 'Quit'}
                        ]
                    },
                    {
                        label: 'Edit',
                        icon: 'fa-edit',
                        items: [
                            {label: 'Undo', icon: 'fa-mail-forward'},
                            {label: 'Redo', icon: 'fa-mail-reply'}
                        ]
                    },
                    {
                        label: 'Actions',
                        icon: 'fa-gear',
                        items: [
                            {
                                label: 'Edit',
                                icon: 'fa-refresh',
                                items: [
                                    {label: 'Save', icon: 'fa-save'},
                                    {label: 'Update', icon: 'fa-save'},
                                ]
                            },
                            {
                                label: 'Other',
                                icon: 'fa-phone',
                                items: [
                                    {label: 'Delete', icon: 'fa-minus'}
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Help',
                        icon: 'fa-question',
                        items: [
                            {
                                label: 'Contents'
                            },
                            {
                                label: 'Search',
                                icon: 'fa-search',
                                items: [
                                    {
                                        label: 'Text',
                                        items: [
                                            {
                                                label: 'Workspace'
                                            }
                                        ]
                                    },
                                    {
                                        label: 'File'
                                    }
                                ]}
                        ]
                    },
                    {
                        label: 'Quit', icon: 'fa-minus'
                    }
                ]
            }
        ];
    }

    public confirmLogout() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to logout?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.userService.logout().subscribe(
                    data => {
                        this.storageService.clear();
                        this.router.navigate(['login']);
                    },
                    err => console.log(err.toString())
                );
            }
        });
    }
}
