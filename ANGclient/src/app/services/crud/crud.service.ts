/* 
Imports
*/
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { ObservableService } from "../obervable/observable-service.service";
//

/* 
Definition & export
*/
  @Injectable({
    providedIn: 'root'
  })
  export class CrudService {
    /* 
    Déclarations
    */
      private apiUrl: String;
    //

    constructor( private HttpClient: HttpClient, private ObservableService: ObservableService ){
      this.apiUrl = 'http://localhost:9868/api';
    };

    /* 
    Methods CRUD
    */
      // CRUD: Create
      public createItem = (endpoint: string, data: any) => {
        // Set header
        let myHeader = new HttpHeaders();
        myHeader.append('Content-Type', 'application/json; charset=UTF-8');
        
        return this.HttpClient.post(`${this.apiUrl}/${endpoint}`, data, 
        { headers: myHeader })
        .toPromise().then( data => this.getData(data, endpoint) ).catch(this.handleError);
      }

      // CRUD: Read
      public readItem = (endpoint: String) => {
        return this.HttpClient.get(`${this.apiUrl}/${endpoint}`)
        .toPromise().then( data => this.getData(data, endpoint) ).catch(this.handleError);
      }

      // CRUD: Read one
      public readOneItem = (endpoint: String, id: String) => {
        return this.HttpClient.get(`${this.apiUrl}/${endpoint}/${id}`)
        .toPromise().then( data => this.getData(data) ).catch(this.handleError);
      }

      // CRUD: Update
      public updateItem = (endpoint: string, data: any) => {
        // Set header
        let myHeader = new HttpHeaders();
        myHeader.append('Content-Type', 'application/json; charset=UTF-8');
        
        return this.HttpClient.put(`${this.apiUrl}/${endpoint}`, data, 
        { headers: myHeader })
        .toPromise().then( data => this.getData(data) ).catch(this.handleError);
      }

      // CRUD: Delete
      public deleteItem = ( endpoint: string, id:string ) => {
        return this.HttpClient.delete(`${this.apiUrl}/${endpoint}/${id}`)
        .toPromise().then( data => this.getData(data) ).catch(this.handleError);
      }
    //

    /* 
    Methods to get API responses
    */
      // Get the API response
      private getData(apiResponse: any, endpoint: String = ''){
        return apiResponse || {};
      };

      // Get the API error
      private handleError(err: any){
        return Promise.reject(err);
      };
    //
  }
//