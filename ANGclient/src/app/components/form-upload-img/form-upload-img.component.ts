/* 
Import & config
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { ContentService } from "../../services/content/content.service";
  import { CrudService } from "../../services/crud/crud.service";
  

  @Component({
    selector: 'app-form-upload-img',
    templateUrl: './form-upload-img.component.html'
  })
//


/* 
Definition & export
*/
  export class FormUploadImgComponent implements OnInit {

    /* 
    Declarations
    */
      public formData = null;
      public tempsImg: any;
      public resizedImg: any;
    //

    constructor(
      private ContentService: ContentService,
      private CrudService: CrudService,
    ) { }

    /* 
    Methods
    */
      public onFileChange = (event) => {
        let reader = new FileReader();

        if(event.target.files && event.target.files.length > 0) {
          let file = event.target.files[0];
          reader.readAsDataURL(file);

          reader.onload = (data) => {
            this.tempsImg = reader.result;

            this.ContentService.resizeImage(reader.result, 400, 400)
            .then( resizedImg => {
              this.resizedImg = resizedImg;
              console.log(this.resizedImg)

              // Use tue CRUD service to upload image
              this.CrudService.createItem('media', {
                fileName: file.name,
                fileType: file.type,
                total: data.total,
                value: reader.result
              })
              .then( apiResponse => {
                console.log(apiResponse)
              })
              .catch( apiResponse => {
                console.error(apiResponse)
              })
            })
          }
        }
      }

      public submitForm = () => {
        console.log(this.formData)


      }
    //

    ngOnInit() {
    }

  }
//