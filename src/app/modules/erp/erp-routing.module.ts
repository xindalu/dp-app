import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ErpComponent } from "./components/erp/erp.component";

const routes: Routes = [
    {
        path: '**',
        component: ErpComponent
    }
];

@NgModule({
    declarations: [ErpComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErpRoutingModule { }
