import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

export const routeConfig: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'person/:person-id', component: PersonComponent }
];
