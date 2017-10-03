import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { DetailComponent } from './detail/detail.component';
import { GuideComponent } from './guide/guide.component';
import { AboutUsComponent } from './about-us/about-us.component';
export const routeConfig: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'person/:person-id', component: PersonComponent },
  { path: 'detail/:todo-id', component: DetailComponent }
];
