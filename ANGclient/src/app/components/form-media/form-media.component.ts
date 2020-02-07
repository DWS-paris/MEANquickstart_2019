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
      public base64image = null;

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
          source: null
        });
      };

      // Get form change
      public onFileChange(event) {
        let reader = new FileReader();
        if(event.target.files && event.target.files.length > 0) {
          let file = event.target.files[0];
          reader.readAsDataURL(file);

          

          reader.onload = (data) => {

            
            this.base64image = reader.result;

            this.formData = {
              filename: file.name,
              filetype: file.type,
              total: data.total,
              value: reader.result
            }

            
          };
        }
      }

      // Submit form
      public submitForm = () => {
        // Use the service to connect user
        this.CrudService.createItem('media', this.formData)
        .then( spaceResponse => {
          console.log(spaceResponse)
        })
        .catch( spaceError => {
          console.log(spaceError)
        })
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