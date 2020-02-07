/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    // Inner
    import { FormMediaComponent } from "./form-media.component";
// 


/* 
Definition & export 
*/
    @NgModule({
        declarations: [ FormMediaComponent ],
        imports: [ 
            CommonModule, 
            HttpClientModule,
            FormsModule, 
            ReactiveFormsModule
        ],
        exports: [ FormMediaComponent ]
    })

    export class FormMediaModule {};
//