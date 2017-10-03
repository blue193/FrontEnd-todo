import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { GuideComponent } from './guide/guide.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule }        from './app-routing.module';
import { TodoService } from './todo.service';
@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoItemComponent,
    GuideComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
