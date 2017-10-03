import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../service/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.sass']
})
export class PeopleComponent implements OnInit {

  people: any[] = [];
  constructor(
    private _peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.people = this._peopleService.getPeople();
  }

}
