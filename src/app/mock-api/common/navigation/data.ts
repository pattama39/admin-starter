/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'homepage',
        title: 'หน้าแรก',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/homepage'
    },
    {
        id   : 'dashboard',
        title: 'ข้อมูลสถิติ',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id      : 'customer',
        title   : 'คนไข้และลูกค้า',
        type    : 'collapsable',
        icon : 'heroicons_outline:user-circle',
        children: [           
            {
                id   : 'searchcustomer',
                title: 'ค้นหา',
                type : 'basic',
                icon : 'heroicons_outline:search-circle',
                link : '/customer/searchcustomer'
            },
            {
                id   : 'addcuatomer',
                title: 'เพิ่ม',
                type : 'basic',
                icon : 'add_circle_outline',
                link : '/customer/addcustomer'
            }
        ]
    },
    {
        id   : 'homecare',
        title: 'ดูแลที่บ้าน',
        type : 'basic',
        icon : 'mat_outline:local_hospital',
        link : '/room/homecare'
    },
    {
        id   : 'ipd',
        title: 'พักรักษา',
        type : 'basic',
        icon : 'bed',
        link : '/room/ipd'
    },
    {
        id   : 'cashier',
        title: 'การเงิน',
        type : 'basic',
        icon : 'heroicons_outline:cash',
        link : '/room/cashier'
    },
    {
        id   : 'inventory',
        title: 'คลังและค่าใช้จ่าย',
        type : 'basic',
        icon : 'heroicons_outline:archive',
        link : '/inventory'
    },
    {
        id   : 'report',
        title: 'รายงาน',
        type : 'basic',
        icon : 'heroicons_outline:document-report',
        link : '/report'
    },
    {
        id   : 'setting',
        title: 'ตั้งค่า',
        type : 'basic',
        icon : 'heroicons_outline:cog',
        link : '/setting'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'homepage',
        title: 'หน้าแรก',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/homepage'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'homepage',
        title: 'หน้าแรก',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/homepage'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'homepage',
        title: 'หน้าแรก',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/homepage'
    }
];
