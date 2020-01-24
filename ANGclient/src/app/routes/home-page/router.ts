/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { HomePageComponent } from './home-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: HomePageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//