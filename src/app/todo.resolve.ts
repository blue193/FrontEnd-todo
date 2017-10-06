import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TodoService } from './service/todo.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodoResolver implements Resolve<any> {
  constructor(
    private _todoService: TodoService
  ){}

  resolve( route: ActivatedRouteSnapshot ): Observable<any> {
    let todoId = route.params['todo-id'];
    return this._todoService.getTodoById(todoId);
  }
}
