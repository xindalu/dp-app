import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HraComponent } from "./components/hra/hra.component";

const routes: Routes = [
    {
        path: '**',
        component: HraComponent
    }
];

@NgModule({
    declarations: [HraComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HraRoutingModule { }
