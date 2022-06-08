import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoListComponent} from './todo-list/todo-list.component';
import { TodoNewComponent } from './todo-new/todo-new.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {MensagemModule} from "../components/mensagem/mensagem.module";


@NgModule({
  declarations: [
    TodoListComponent,
    TodoNewComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    MensagemModule,
  ]
})
export class TodoModule {
}
