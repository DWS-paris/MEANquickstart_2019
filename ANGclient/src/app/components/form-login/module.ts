/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    // Inner
    import { FormLoginComponent } from "./form-login.component";
// 


/* 
Definition & export 
*/
    @NgModule({
        declarations: [ FormLoginComponent ],
        imports: [ 
            CommonModule, 
            HttpClientModule,
            FormsModule, 
            ReactiveFormsModule
        ],
        exports: [ FormLoginComponent ]
    })

    export class FormLoginModule {};
//