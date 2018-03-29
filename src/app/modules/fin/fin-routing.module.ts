import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FinComponent } from "./components/fin/fin.component";

const routes: Routes = [
    {
        path: '**',
        component: FinComponent
    }
];

@NgModule({
    declarations: [FinComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FinRoutingModule { }
