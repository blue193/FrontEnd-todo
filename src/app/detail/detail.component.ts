import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  todo_item: Todo;
  constructor(
    private _todoService: TodoService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let itemId = this._activatedRoute.snapshot.paramMap.get('todo-id');
    this.todo_item = this._todoService.getTodoById(Number(itemId));
  }

}
