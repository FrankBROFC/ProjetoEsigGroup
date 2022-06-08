import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Todo, Todos} from "./todo";

const API = environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodosSituacao(situacao: string): Observable<Todos> {
    return this.httpClient.get<Todos>(`${API}/todo?situacao=${situacao}`);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${API}/todo/${id}`);
  }

  concluirTodo(id: number): Observable<Todo> {
    return this.httpClient.put<Todo>(`${API}/todo/updateSituacao/${id}`, []);
  }

  salvarTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${API}/todo`,todo );
  }

  buscarTodo(id: number, titulo_descricao: string, situacao:string, responsavel: string): Observable<Todos> {
    return this.httpClient.get<Todos>(`${API}/todo/buscar?descricao=${titulo_descricao}&id=${id}&responsavel=${responsavel}&situacao=${situacao}&titulo=${titulo_descricao}`);
  }
}
