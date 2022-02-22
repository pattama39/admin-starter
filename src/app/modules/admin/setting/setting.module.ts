import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SettingComponent } from 'app/modules/admin/setting/setting.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { BussinessdetailComponent } from './bussiness/bussinessdetail/bussinessdetail.component';

const settingRoutes: Route[] = [
    {
        path: '',
        component: SettingComponent
    },
    {
        path    : ':hospitalCode/bussiness',
        children: [
            {
                path     : '',
                component: BussinessComponent
            },
            {
                path    : 'bussinessdetail/:branchCode',
                component: BussinessdetailComponent
            }
        ]
    },
];

@NgModule({
    declarations: [
        SettingComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forChild(settingRoutes),
    ]
})
export class SettingModule
{
}
