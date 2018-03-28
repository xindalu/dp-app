import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { WelcomeComponent } from "./shared/components/welcome/welcome.component";
import { Error404Component } from "./shared/components/error-404/error-404.component";
import { GuideComponent } from "./shared/components/guide/guide.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./classes/auth-guard";

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'home',
        component: WelcomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: 'app/modules/admin/admin.module#AdminModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'dcc',
        loadChildren: 'app/modules/dcc/dcc.module#DccModule'
    },
    {
        path: 'hra',
        loadChildren: 'app/modules/hra/hra.module#HraModule'
    },
    {
        path: 'erp',
        loadChildren: 'app/modules/erp/erp.module#ErpModule'
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '**',
        component: GuideComponent
    }
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CheckboxModule,
        ButtonModule,
        PasswordModule,
        InputTextModule,
        MessagesModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [GuideComponent, Error404Component, WelcomeComponent, LoginComponent],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule {}
