/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { HomePageComponent } from './home-page.component';
    import { FormLoginModule } from "../../components/form-login/module";
    import { FormMediaModule } from "../../components/form-media/module";
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ HomePageComponent ],
        imports: [ 
            CommonModule, 
            Routing,
            FormLoginModule,
            FormMediaModule
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//