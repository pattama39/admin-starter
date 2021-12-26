import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from 'app/modules/admin/homepage/homepage.component';

const homepageRoutes: Route[] = [
    {
        path     : '',
        component: HomePageComponent
    }
];

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports     : [
        RouterModule.forChild(homepageRoutes)
    ]
})
export class HomePageModule
{
}
