import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeConfig } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './home/todo-app/todo-app.component';
import { TodoItemComponent } from './home/todo-app/todo-item/todo-item.component';
import { TodoService } from './todo.service';
import { PeopleService } from './service/people.service';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GuideComponent } from './guide/guide.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoItemComponent,
    PeopleComponent,
    PersonComponent,
    HomeComponent,
    DetailComponent,
    AboutUsComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig, {
      useHash: false,
      enableTracing: false
    })
  ],
  providers: [TodoService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
