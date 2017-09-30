import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';
@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
