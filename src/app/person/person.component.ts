import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../service/people.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
  person: any;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _peopleService: PeopleService
  ) { }

  ngOnInit() {
    let personId = this._activatedRoute.snapshot.paramMap.get('person-id');
    this.person = this._peopleService.getPerson(personId);
  }

}
