import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
    {
        path: '**',
        component: AdminComponent
    }
];

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
