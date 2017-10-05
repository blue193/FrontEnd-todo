import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.sass']
})
export class GuideComponent implements OnInit {
  todoArray: any[];
  constructor( private _todoService: TodoService ) {}
  ngOnInit() {
    this._todoService.getTodosHttp().subscribe(res => {this.todoArray = res; });
  }

}
