import { Component, OnInit, EventEmitter} from '@angular/core';
import { Todo } from '../../todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  newTodo: Todo = new Todo();
  todoArray: Todo[];
  valComment: String[] = [];
  ngOnInit() {
    this.todos();
  }

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    if ( this.newTodo.title.trim() !== '') {
      this.todoService.addTodo(this.newTodo)
        .subscribe(res => {
          this.newTodo = new Todo();
          this.todos();
        });
    }
  }

  todos() {
    return this.todoService.getAllTodos()
      .subscribe( res => {
        this.todoArray = res;
      });
  }

  onUpdatedTodos(state) {
    if (state) {
      console.log('state', state);
      this.todos();
    }
  }
  onClickItem(str) {
    if (str) {
      console.log('aaaaaaaaaaa', str.label);
      this.valComment.push(str);
    }
  }
}
