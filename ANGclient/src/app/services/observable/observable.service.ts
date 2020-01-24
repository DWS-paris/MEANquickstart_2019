/* 
Imports 
*/
  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable } from 'rxjs';
//

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  /* 
  Set observable empty object
  */
    protected loggedUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    protected postCollection: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  //

  /*
  Function to set observable data
  */
    public setObservableData = (type: string, data: any) => {
      switch(type){
        case 'login':
          this.loggedUser.next(data);
          break

          case 'post':
            this.postCollection.next(data);
            break

        default:
          break;
      };
    };
  //

  /* 
  Observers functions
  */
    public getLoggedUser(): Observable<any> { return this.loggedUser };
    public getPostCollectionn(): Observable<any> { return this.postCollection };
  //

}
