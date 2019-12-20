/* 
Imports
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { AppRoutingModule } from './app-routing.module';

  // Inner
  import { AppComponent } from './app.component';
  import { FormUploadImgModule } from "./components/form-upload-img/module";
  import { ContentService } from "./services/content/content.service";
//

/* 
Definition & export
*/
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormUploadImgModule
    ],
    providers: [ ContentService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
//