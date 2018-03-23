import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { WelcomeComponent } from "./shared/components/welcome/welcome.component";
import { Error404Component } from "./shared/components/error-404/error-404.component";
import { GuideComponent } from "./shared/components/guide/guide.component";

const routes: Routes = [
    {
        path: 'home',
        component: WelcomeComponent
    },
    {
        path: 'admin',
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
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [GuideComponent, Error404Component, WelcomeComponent],
    exports: [RouterModule]
})
export class AppRoutingModule {}
