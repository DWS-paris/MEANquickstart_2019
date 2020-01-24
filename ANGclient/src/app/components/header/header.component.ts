/* 
Imports 
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { ObservableService } from "../../services/observable/observable.service";
  import { CrudService } from "../../services/crud/crud.service";

  // Definition
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
  })
// 

/*
Export
*/
  export class HeaderComponent implements OnInit {

    public userData: any;

    constructor(
      private ObservableService: ObservableService,
      private CrudService: CrudService
    ) {
      // Get logged user data from Observable
      this.ObservableService.getLoggedUser().subscribe( loggedUerData => {
        if( loggedUerData === null ){
          this.userData = null;
          this.CrudService.readItem('me')
          .then( apiResponse => console.log(apiResponse) )
          .catch( apiResponse => console.log(apiResponse) )
        }
        else{
          this.userData = loggedUerData;
        }
      })
     }

    public logout = () => {
      this.CrudService.createItem('logout', null)
      .then( apiResponse => {
        this.ObservableService.setObservableData('login', null)
      } )
      .catch( apiResponse => console.log(apiResponse) )
    }

    ngOnInit() {
    }
  }
//