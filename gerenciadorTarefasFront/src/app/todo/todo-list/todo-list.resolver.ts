import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, take} from 'rxjs';
import {Todos} from "../todo";
import {TodoService} from "../todo.service";

@Injectable({
  providedIn: 'root'
})
export class TodoListResolver implements Resolve<Todos> {

  constructor(private todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todos> {
    return this.todoService.getTodosSituacao('PENDENTE').pipe(take(1));
  }
}
