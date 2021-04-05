import { Action, createReducer, on } from "@ngrx/store";
import { createTodoAction, toggleCompletedAction, changeTextAction, deleteTodoAction, toggleAllCompletedAction, clearCompletedAction } from './todo.actions';
import { Todo } from './models/todo-models';

const initialState:Todo[] = [
  new Todo('Estado inicial'),
  new Todo('Aprender NGRX'),
  new Todo('Aprender Node'),
  new Todo('Aprender React'),
];

const _todoReducer = createReducer(initialState,
  on(createTodoAction, (state, { text }) => [ ...state, new Todo(text) ] ),
  on(deleteTodoAction, (state, { id }) => state.filter( todo => todo.id != id ) ),
  on(toggleCompletedAction, (state, { id }) => {
    return state.map( todo => {
      if( todo.id === id ) return{ ...todo, isCompleted: !todo.isCompleted };
      
      return todo;
    });
  }),
  on(toggleAllCompletedAction, state => {
    return state.map( todo => {
      return {...todo, isCompleted: !todo.isCompleted};
    });
  }),
  on(changeTextAction, (state, { id, text }) => {
    return state.map( todo => {
      if( todo.id === id ) return { ...todo, text };
      
      return todo;
    });
  }),
  on(clearCompletedAction, state => {
    return state.filter( todo => !todo.isCompleted );
  }),
);


export function todoReducer(state:any, Action:Action){
  return _todoReducer(state, Action);
}