import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { DetailComponent } from './detail/detail.component';
import { GuideComponent } from './guide/guide.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PersonResolver } from './person.resolve';
import { TodoResolver} from './todo.resolve';
import { LoginComponent } from './login/login.component';

export const routeConfig: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'about-us/:todo-id',
    component: AboutUsComponent,
  },
  { path: 'person/:person-id',
    component: PersonComponent,
    resolve: { person: PersonResolver,}
  },
  { path: 'detail/:todo-id',
    component: DetailComponent,
    resolve: { todoItem: TodoResolver, }
  }
];
