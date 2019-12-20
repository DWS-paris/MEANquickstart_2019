/* 
Imports
*/
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { FormUploadImgComponent } from "./form-upload-img.component";

    // Gestion des formulaires
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//

/* 
Definition & export
*/
    @NgModule({
        declarations: [ FormUploadImgComponent ],
        exports: [ FormUploadImgComponent ],
        imports: [ 
            CommonModule, 
            FormsModule, 
            ReactiveFormsModule 
        ]
    })

    export class FormUploadImgModule{};
//