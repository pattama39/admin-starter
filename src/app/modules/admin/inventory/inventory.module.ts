import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InventoryComponent } from 'app/modules/admin/inventory/inventory.component';

const inventoryRoutes: Route[] = [
    {
        path     : '',
        component: InventoryComponent
    }
];

@NgModule({
    declarations: [
        
    ],
    imports     : [
        RouterModule.forChild(inventoryRoutes)
    ]
})
export class InventoryModule
{
}
