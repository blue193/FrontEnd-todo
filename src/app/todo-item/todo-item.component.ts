import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  // get todos() {
  //   return this.todoService.getAllTodos();
  // }
}
