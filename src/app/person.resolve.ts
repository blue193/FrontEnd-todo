import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PeopleService } from './service/people.service';
@Injectable()
export class PersonResolver implements Resolve<any>{
  constructor(
    private _peopleService: PeopleService
  ){}

  resolve( route: ActivatedRouteSnapshot){
      let personId = route.params['person-id'];
      return this._peopleService.getPerson(personId);
  }
}
