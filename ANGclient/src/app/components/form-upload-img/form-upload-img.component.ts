/* 
Import & config
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { ContentService } from "../../services/content/content.service";

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
      private ContentService: ContentService
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