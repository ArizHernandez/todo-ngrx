import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo-models';
import { todoReducer } from './todos/todo.reducer';
import { filterTypes } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';

export interface AppState{
  todos: Todo[],
  filters: filterTypes
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filterReducer
}