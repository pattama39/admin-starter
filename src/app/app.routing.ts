import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboard'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    // Redirect signed in user to the '/dashboard'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'homepage', loadChildren: () => import('app/modules/admin/homepage/homepage.module').then(m => m.HomePageModule)},
            {path: 'dashboard', loadChildren: () => import('app/modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
            
            {path: 'customer', children: [
                {path: 'addcustomer', loadChildren: () => import('app/modules/admin/customer/addcustomer/addcustomer.module').then(m => m.AddCustomerModule)},
                {path: 'searchcustomer', loadChildren: () => import('app/modules/admin/customer/searchcustomer/searchcustomer.module').then(m => m.SearchCustomerModule)},
            ]},

            {path: 'room', children: [
                {path: 'ipd', loadChildren: () => import('app/modules/admin/room/ipd/ipd.module').then(m => m.IPDModule)},
                {path: 'cashier', loadChildren: () => import('app/modules/admin/room/cashier/cashier.module').then(m => m.CashierModule)},
            ]},
        
            {path: 'inventory', loadChildren: () => import('app/modules/admin/inventory/inventory.module').then(m => m.InventoryModule)},
            {path: 'report', loadChildren: () => import('app/modules/admin/report/report.module').then(m => m.ReportModule)},
            {path: 'setting', loadChildren: () => import('app/modules/admin/setting/setting.module').then(m => m.SettingModule)},
        ]
    }
];
