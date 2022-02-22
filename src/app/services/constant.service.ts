import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
    // กำหนด path ของ URL สำหรับเรียก API ไว้ที่นี้
    baseAPIURL =  'http://203.150.107.222:5001/api/';
    settingAPIURL =  'https://localhost:44380/api/'; // Setting API (ตั้งค่า)

    constructor() { }
}
