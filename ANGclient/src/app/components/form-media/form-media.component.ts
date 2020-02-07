/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Inner
  import { CrudService } from "../../services/crud/crud.service";

  // Definition
  @Component({
    selector: 'app-form-media',
    templateUrl: './form-media.component.html',
  })
//


/* Export */
  export class FormMediaComponent implements OnInit {

    /* 
    Config.
    */
      // Declaration
      public form: FormGroup;
      public formData: any;

      // Instanciation
      constructor(
        private FormBuilder: FormBuilder,
        private CrudService: CrudService
      ) { };
    //


    /* 
    Methods
    */
      // Reset form
      private resetForm = () => {
        // Set validator
        this.form = this.FormBuilder.group({
          email: [undefined, Validators.required],
          password: [undefined, Validators.required]
        });
      };

      // Get form change
      public onFileChange = event => {

      }

      // Submit form
      public submitForm = () => {
        // Use the service to connect user
        console.log(this.form.value)
      };
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.resetForm();
      };
    //
  };
//