import { Route } from "@angular/router";
import { BussinessComponent } from "./bussiness/bussiness.component";
import { BussinessdetailComponent } from "./bussiness/bussinessdetail/bussinessdetail.component";
import { ProvinceComponent } from "./province/province.component";
import { SettingComponent } from "./setting.component";

export const settingRoutes: Route[] = [
    {
        path: '',
        component: SettingComponent,
        children: [  
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'setting/bussiness'
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
            {
                path    : 'province',
                children: [
                    {
                        path     : '',
                        component: ProvinceComponent
                    }
                ]
            },
        ]
    },
]