import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SearchCustomerComponent } from 'app/modules/admin/customer/searchcustomer/searchcustomer.component';

const searchcustomerRoutes: Route[] = [
    {
        path     : '',
        component: SearchCustomerComponent
    }
];

@NgModule({
    declarations: [
        SearchCustomerComponent
    ],
    imports     : [
        RouterModule.forChild(searchcustomerRoutes)
    ]
})
export class SearchCustomerModule
{
}
