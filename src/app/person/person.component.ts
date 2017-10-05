import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
  person: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // let personId = this._activatedRoute.snapshot.paramMap.get('person-id');
    // this.person = this._peopleService.getPerson(personId);
    this.person = this._activatedRoute.snapshot.data['person'];
  }

}
