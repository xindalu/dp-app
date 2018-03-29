import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DccComponent } from "./components/dcc/dcc.component";

const routes: Routes = [
    {
        path: '**',
        component: DccComponent
    }
];

@NgModule({
    declarations: [DccComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DccRoutingModule { }
