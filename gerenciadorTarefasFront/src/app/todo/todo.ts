export interface Todo {
  deadline: string;
  descricao: string;
  id: number;
  prioridade: string;
  responsavel: string;
  situacao: string;
  titulo: string;
}

export type Todos= Array<Todo>;
