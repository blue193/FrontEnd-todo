import { Injectable } from '@angular/core';
import { Todo } from '../todo';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()

export class TodoService {
  lastId: Number = 0;
  todos: Todo[] = [];
  headers: Headers;
  options: RequestOptions;
  url = "http://192.168.3.132:3000/todo/";
  constructor(
    private _http: Http
  ) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers});
  }

  getTodoHttp(key: string): Observable<any> {
 //    const httpRequest = this._http.get(`api/todo${key}.json`).map(response => response.json());
 //    return httpRequest;
    return this._http.get(`api/todo${key}.json`).map(response => response.json());
  }

  getTodosHttp(): Observable<any[]> {
    return this._http.get('api/todo-list.json').map((res: Response ) => res.json());
  }

  // Simulate GET /todos
  // getAllTodos(): Observable<Todo[]> {
  //   return this._http.get(this.url, this.options)
  //     .map((res: Response) => res.json())
  //     .catch((err: any) => Observable.throw(err.json().error || 'server error'));
  // }
  getAllTodos(): Observable<Todo[]> {
      return this._http.get(this.url)
        .map(res => res.json());
    }
  // Simulate GET /todos/:id
  getTodoById(id: string): Observable<Todo> {
    return this._http.get(this.url + id, this.options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'server error'));
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    let body = JSON.stringify(todo);
    return this._http.post(this.url, body, this.options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'server error'));
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<Todo> {
    return this._http.delete(this.url + id, this.options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'server error'));
  }
// Toggle todo complete
  toggleTodoComplete(id: number, todo: Todo): Observable<Todo> {
      return this._http.put(this.url + id, todo, this.options)
        .map((res: Response) => res.json())
        .catch((err: any) => Observable.throw(err.json().error || 'server error'));
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
