import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { IPDComponent } from 'app/modules/admin/room/ipd/ipd.component';

const ipdRoutes: Route[] = [
    {
        path     : '',
        component: IPDComponent
    }
];

@NgModule({
    declarations: [
        IPDComponent
    ],
    imports     : [
        RouterModule.forChild(ipdRoutes)
    ]
})
export class IPDModule
{
}
