import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  todo_item: Todo;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _todoService: TodoService
  ) { }

  ngOnInit() {
    // let itemId = this._activatedRoute.snapshot.paramMap.get('todo-id');
    // this.todo_item = this._todoService.getTodoById(Number(itemId));
    this.todo_item = this._activatedRoute.snapshot.data['todoItem'];
  }

}
