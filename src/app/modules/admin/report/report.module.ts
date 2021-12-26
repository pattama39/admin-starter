import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ReportComponent } from 'app/modules/admin/report/report.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ReportComponent
    }
];

@NgModule({
    declarations: [
        ReportComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class ReportModule
{
}
