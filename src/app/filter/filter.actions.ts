import { createAction, props } from '@ngrx/store';

export type filterTypes = 'all' | 'completed' | 'pending' 

export const setFilterAction = createAction(
  '[Filter] Set Filter',
  props<{ filter:filterTypes }>()  
)