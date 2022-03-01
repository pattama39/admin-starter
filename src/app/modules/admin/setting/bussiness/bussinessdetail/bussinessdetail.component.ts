import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbservicesService } from 'app/services/dbservices.service';

@Component({
  selector: 'app-bussinessdetail',
  templateUrl: './bussinessdetail.component.html',
  styleUrls: ['./bussinessdetail.component.scss']
})
export class BussinessdetailComponent implements OnInit {
    code!: string | null;
    id!: string | null;
    edit: true;

    constructor(private route: ActivatedRoute, public dbService: DbservicesService) { }

    ngOnInit(): void {
        this.code = this.route.snapshot.paramMap.get('hospitalCode');
        this.id = this.route.snapshot.paramMap.get('branchCode');
        this.dbService.getBussinessDetail(this.code || 'null', this.id || 'null', this.edit);
    }

}
