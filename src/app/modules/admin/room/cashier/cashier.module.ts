import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CashierComponent } from 'app/modules/admin/room/cashier/cashier.component';

const cashierRoutes: Route[] = [
    {
        path     : '',
        component: CashierComponent
    }
];

@NgModule({
    declarations: [
        CashierComponent
    ],
    imports     : [
        RouterModule.forChild(cashierRoutes)
    ]
})
export class CashierModule
{
}
