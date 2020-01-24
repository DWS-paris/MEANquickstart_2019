/* 
Imports
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { AppRoutingModule } from './app-routing.module';
  import { HttpClientModule } from '@angular/common/http';
  import { RouterModule } from '@angular/router';

  // Inner
  import { MainRouter } from './app.router';
  import { AppComponent } from './app.component';
  import { FormUploadImgModule } from "./components/form-upload-img/module";
  import { ContentService } from "./services/content/content.service";
  import { CrudService } from "./services/crud/crud.service";
  import { ObservableService } from "./services/observable/observable.service";
  import { HeaderComponent } from './components/header/header.component';
//

/* 
Definition & export
*/
  @NgModule({
    declarations: [
      AppComponent,
      HeaderComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot( MainRouter, { onSameUrlNavigation: 'reload' } ),
      HttpClientModule,
      AppRoutingModule,
      FormUploadImgModule
    ],
    providers: [ ContentService, CrudService, ObservableService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
//