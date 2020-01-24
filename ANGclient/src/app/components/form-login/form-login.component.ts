/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Inner
  import { CrudService } from "../../services/crud/crud.service";

  // Definition
  @Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html'
  })
//


/* Export */
  export class FormLoginComponent implements OnInit, OnChanges {

    /* 
    Config.
    */
      // Declaration
      public form: FormGroup;
      public formData: any;
      public passwordError: Boolean = false;
      public formError: Boolean = false;
      public errorMessage: String = '';

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

      // Submit form
      public submitForm = () => {
        // Use the service to connect user
        this.CrudService.createItem('login', this.form.value)
        .then( user => console.log(user) )
        .catch( err => console.log(err) )
      };
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.resetForm();
      };

      ngOnChanges(changes){
        
      };
    //
  };
//