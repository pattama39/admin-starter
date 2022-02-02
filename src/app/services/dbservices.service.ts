/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BussinessModel } from 'app/model/bussiness.model';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class DbservicesService {
    // Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })
    };

    constructor(private http: HttpClient,
        private constant: ConstantService
    ) { }

    bussiness!: BussinessModel[];
    bussinessDetail!: BussinessModel;

    getBussiness(code: string) {
        const myparams = {
            'hospitalCode': code
        };

        this.http.get(`${this.constant.demoAPIURL+ 'Bussiness'}/${code}`, { params: myparams })
        .toPromise()
        .then(res =>this.bussiness = res as BussinessModel[]);
    }

    getBussinessDetail(code: string, id: string) {
        const myparams = {
            'hospitalCode': code,
            'branchCode': id
        };

        this.http.get(`${this.constant.demoAPIURL+ 'Bussiness'}/${code}/${id}`, { params: myparams })
        .toPromise()
        .then(res =>this.bussinessDetail = res as BussinessModel);
    }
}
