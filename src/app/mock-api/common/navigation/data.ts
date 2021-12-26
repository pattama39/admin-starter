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
                id   : 'addcuatomer',
                title: 'เพิ่มคนไข้และลูกค้า',
                type : 'basic',
                icon : 'heroicons_outline:user-add',
                link : '/customer/addcustomer'
            },
            {
                id   : 'searchcustomer',
                title: 'ค้นหาคนไข้และลูกค้า',
                type : 'basic',
                icon : 'heroicons_outline:user',
                link : '/customer/searchcustomer'
            }
        ]
    },
    {
        id      : 'room',
        title   : 'ห้อง',
        subtitle: '',
        type    : 'group',
        children: [
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
            }
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
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
