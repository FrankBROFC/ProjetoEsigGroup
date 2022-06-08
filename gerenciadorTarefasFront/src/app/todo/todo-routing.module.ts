import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoListResolver} from "./todo-list/todo-list.resolver";
import {TodoNewComponent} from "./todo-new/todo-new.component";

const routes: Routes = [
  {
    path:'',
    component: TodoListComponent,
    resolve: {
      todos: TodoListResolver
    }
  },
  {
    path:'new',
    component: TodoNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
