/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { UserPageComponent } from './user-page.component';
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ UserPageComponent ],
        imports: [ 
            CommonModule, 
            Routing,
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//