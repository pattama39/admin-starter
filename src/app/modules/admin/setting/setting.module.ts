import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SettingComponent } from 'app/modules/admin/setting/setting.component';
import { BussinessComponent } from './bussiness/bussiness.component';

const settingRoutes: Route[] = [
    { path: '', component: SettingComponent },
    { path: ':hospitalCode/bussiness', component: BussinessComponent }
];

@NgModule({
    declarations: [
        SettingComponent
    ],
    imports: [
        RouterModule.forChild(settingRoutes),
    ]
})
export class SettingModule
{
}
