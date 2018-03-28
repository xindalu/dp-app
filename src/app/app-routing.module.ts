import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MenubarModule } from 'primeng/menubar';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { WelcomeComponent } from "./shared/components/welcome/welcome.component";
import { Error404Component } from "./shared/components/error-404/error-404.component";
import { GuideComponent } from "./shared/components/guide/guide.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { AuthGuard } from "./classes/auth-guard";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'index',
        component: DashboardComponent
    },
    {
        path: 'welcome',
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
        ToolbarModule,
        PanelMenuModule,
        ScrollPanelModule,
        MenubarModule,
        PasswordModule,
        InputTextModule,
        MessagesModule,
        ConfirmDialogModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [GuideComponent, Error404Component, WelcomeComponent, LoginComponent, DashboardComponent],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule {}
