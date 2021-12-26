import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddCustomerComponent } from 'app/modules/admin/customer/addcustomer/addcustomer.component';

const addcustomerRoutes: Route[] = [
    {
        path     : '',
        component: AddCustomerComponent
    }
];

@NgModule({
    declarations: [
        AddCustomerComponent
    ],
    imports     : [
        RouterModule.forChild(addcustomerRoutes)
    ]
})
export class AddCustomerModule
{
}
