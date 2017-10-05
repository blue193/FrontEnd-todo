import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TodoService } from './todo.service';

@Injectable()
export class TodoResolver implements Resolve<any> {
  constructor(
    private _todoService: TodoService
  ){}

  resolve( route: ActivatedRouteSnapshot ) {
    let todoId = route.params['todo-id'];
    return this._todoService.getTodoById(Number(todoId));
  }
}