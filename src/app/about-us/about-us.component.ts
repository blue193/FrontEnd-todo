import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {
  todo$: Observable<any>;
  todoId: string;
  constructor( private _todoService: TodoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todoId = this._activatedRoute.snapshot.paramMap.get('todo-id');
    this.todo$ = this._todoService.getTodoHttp(this.todoId);
  }

}
