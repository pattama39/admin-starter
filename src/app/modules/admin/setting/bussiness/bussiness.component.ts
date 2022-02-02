/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbservicesService } from 'app/services/dbservices.service';


@Component({
    selector: 'bussiness',
    templateUrl: './bussiness.component.html',
    encapsulation: ViewEncapsulation.None
})
export class BussinessComponent implements OnInit {
    code!: string | null;
    id!: string | null;

    /**
     * Constructor
     */
    constructor(private route: ActivatedRoute,
        public dbService: DbservicesService) {
    }

    ngOnInit(): void {
        this.code = this.route.snapshot.paramMap.get('hospitalCode');
        this.dbService.getBussiness(this.code || 'null');
    }

    onClickOrg(code: string, id: string) {
        if (code != null && id != null) {
            this.dbService.getBussinessDetail(code, id);
        }
    }
}
