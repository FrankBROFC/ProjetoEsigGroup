import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../todo.service";
import {Router} from "@angular/router";
import {formatDate} from "@angular/common";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
  prioridades =  Array<string>('ALTA', 'MEDIA', 'BAIXA');
  responsaveis =  Array<string>('Francisco Fernandes', 'Fabia Oliveira');

  novoTodoForm!: FormGroup;
  dataAtual = Date.now();

  constructor(private formBuilder: FormBuilder, private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.novoTodoForm = this.formBuilder.group(
      {
        titulo: ['', [Validators.required, Validators.maxLength(50)]],
        descricao: ['', [Validators.maxLength(250)]],
        deadline: [``, Validators.required],
        prioridade: ['', Validators.required],
        responsavel: ['', Validators.required]
      }
    );
  }

  salvar() {
    if (this.novoTodoForm.valid) {
      const todo = this.novoTodoForm.getRawValue() as Todo;
      this.service.salvarTodo(todo).subscribe(() => {
        this.router.navigate(['']);
      }, (error) => {
        alert("Erro ao salvar tarefa! Tente novamente!");
      });
    }
  }

  cancelar() {
    this.router.navigate(['']);
  }
}
