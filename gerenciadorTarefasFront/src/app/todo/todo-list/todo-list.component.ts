import {Component, Input, OnInit} from '@angular/core';
import {Todos} from "../todo";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$ !: Todos;
  todoForm!: FormGroup;
  responsaveis =  Array<string>('Francisco Fernandes', 'Fabia Oliveira');
  situacoes =  Array<string>('CONCLUIDO', 'PENDENTE');

  constructor(private activateRoute: ActivatedRoute, private router: Router, private service: TodoService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(() => {
      this.todos$ = this.activateRoute.snapshot.data['todos'];
    });

    this.todoForm = this.formBuilder.group({
      titulo_descricao: [''],
      numero: [0],
      responsavel: [''],
      situacao: ['']
    })
  }

  delete(id: number) {
    this.service.deleteTodo(id).subscribe(() => {
        this.service.getTodosSituacao('PENDENTE').subscribe((todos) => {
          this.todos$ = todos
        })
      }
    );
  }

  concluir(id: number) {
    this.service.concluirTodo(id).subscribe(() => {
      this.service.getTodosSituacao('PENDENTE').subscribe((todos) => {
        this.todos$ = todos;
        alert("Tarefa concluida com sucesso!!");
      });
    });
  }

  buscar() {
    if (this.todoForm.get('titulo_descricao')?.value || this.todoForm.get('numero')?.value ||
      this.todoForm.get('responsavel')?.value || this.todoForm.get('situacao')?.value) {
      console.log()
      this.service.buscarTodo(this.todoForm.get('numero')?.value, this.todoForm.get('titulo_descricao')?.value, this.todoForm.get('situacao')?.value, this.todoForm.get('responsavel')?.value).subscribe((todos) => {
        this.todos$ = todos;
      });

      console.log(this.todoForm.getRawValue());
    }
  }
}
