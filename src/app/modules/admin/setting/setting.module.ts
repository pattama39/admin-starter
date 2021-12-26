import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SettingComponent } from 'app/modules/admin/setting/setting.component';

const settingRoutes: Route[] = [
    {
        path     : '',
        component: SettingComponent
    }
];

@NgModule({
    declarations: [
        SettingComponent
    ],
    imports     : [
        RouterModule.forChild(settingRoutes)
    ]
})
export class SettingModule
{
}
