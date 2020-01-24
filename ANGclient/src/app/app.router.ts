/* 
Imports
*/
    // Angular
    import { Routes } from '@angular/router';

    // Inner
    import { AuthGuard } from "./auth.guard";
//

/* 
Export
*/
    export const MainRouter: Routes = [
        {
            path: '',
            loadChildren: './routes/home-page/module#Module'
        },
        {
            path: 'me',
            loadChildren: './routes/user-page/module#Module',
            canActivate: [ AuthGuard ]
        }
    ];
//