/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbservicesService } from 'app/services/dbservices.service';

@Component({
    selector     : 'setting',
    templateUrl  : './setting.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SettingComponent implements OnInit
{
    /**
     * Constructor
     */
    constructor(public dbService: DbservicesService)
    {
    }

    ngOnInit(): void {

    }

    onClickOrg(code: string) {
        if (code != null) {
          this.dbService.getBussiness(code);
        }
    }
}
