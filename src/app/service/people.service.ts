import { Injectable } from '@angular/core';

@Injectable()

export class PeopleService {

  private people: any[] = [];
  constructor() {
    this.people = [
      { id: 1, name: 'Kim Yong Chol'},
      { id: 2, name: 'Ri Gil Nam'},
      { id: 3, name: 'Pak Chung Song'}
    ];
  }

  getPeople(): any[] {
    return this.people;
  }

  getPerson(id: string): any {
    for (let i in this.people) {
      let person = this.people[i];
      if ( id == person.id) {
        return person;
      }
    }
    return null;
  }

}
