import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  newTodo: Todo = new Todo();
  ngOnInit() {
  }

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    if ( this.newTodo.title.trim() === '') {
      return;
    }
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get todos() {
    return this.todoService.getAllTodos();
  }
}
