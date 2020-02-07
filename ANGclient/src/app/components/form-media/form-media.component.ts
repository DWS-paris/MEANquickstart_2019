/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Inner
  import { CrudService } from "../../services/crud/crud.service";
  import { ContentService } from "../../services/content/content.service";

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
        private CrudService: CrudService,
        private ContentService: ContentService
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

        this.base64image = null;
      };

      // Get form change
      public onFileChange = (event) => {
        // Geet event data
        let reader = new FileReader();
        if(event.target.files && event.target.files.length > 0) {
          // Set data to extract
          let file = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = async (data) => {
            // Set image to display
            this.base64image = reader.result;
            
            // Set image data to save
            this.formData = {
              filename: file.name,
              filetype: file.type,
              total: data.total,
              value: await this.ContentService.resizeImage(reader.result, 800, 800)
            }
          };
        }
      }

      // Submit form
      public submitForm = () => {
        // Use the service to upload image
        this.CrudService.createItem('media', this.formData)
        .then( spaceResponse => {
          console.log(spaceResponse)
          this.resetForm()
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