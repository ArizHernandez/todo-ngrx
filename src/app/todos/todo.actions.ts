import { createAction, props } from "@ngrx/store";

export const toggleAllCompletedAction = createAction('[TODO] Toggle All isCompleted');
export const clearCompletedAction = createAction('[TODO] Clear isCompleted')
export const createTodoAction = createAction(
  '[TODO] create Todo',
  props<{ text: string }>()  
);

export const toggleCompletedAction = createAction(
  '[TODO] Toggle isCompleted',
  props<{ id: number }>()
);


export const changeTextAction = createAction(
  '[TODO] Change Text',
  props<{ id:number, text:string }>()
)

export const deleteTodoAction = createAction(
  '[TODO] Borrar Todo',
  props<{ id:number }>()
)
