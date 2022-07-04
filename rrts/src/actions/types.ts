import { DeleteTodoAction, FetchTodosAction } from "./Todos";


export enum ActionTypes{
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodosAction| DeleteTodoAction;