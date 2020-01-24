/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { UserPageComponent } from './user-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: UserPageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//