import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Todo } from '../../todo';
import { TodoService } from '../../service/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() updatedTodos: EventEmitter<boolean> = new  EventEmitter();
  @Input() logVal: String = '';
  @Output() clickedMe: EventEmitter<any> = new EventEmitter();
  input_val: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  toggleTodoComplete(todo) {
    todo.complete = !todo.complete;
    this.todoService.toggleTodoComplete(todo._id, todo)
      .subscribe(res =>  {
        console.log(res);
      });
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo._id)
      .subscribe(res => {
        console.log('remove item', res);
        this.updatedTodos.emit(true);
      });
  }

  verify() {
    let value;
    if (this.logVal.trim() !== '') {
     value = {
        'label': this.item.title,
        'val': this.logVal
      };
      this.clickedMe.emit(value);
      this.logVal = '';
    }
  }
}
