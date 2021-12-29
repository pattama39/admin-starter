import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeCareComponent } from 'app/modules/admin/room/homecare/homecare.component';

const homecareRoutes: Route[] = [
    {
        path     : '',
        component: HomeCareComponent
    }
];

@NgModule({
    declarations: [
        HomeCareComponent
    ],
    imports     : [
        RouterModule.forChild(homecareRoutes)
    ]
})
export class HomeCareModule
{
}
