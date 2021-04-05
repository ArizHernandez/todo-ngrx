import { Action, createReducer, on, State } from '@ngrx/store';
import { filterTypes, setFilterAction } from './filter.actions';

const initialState:filterTypes = 'all';

const _filterReducer = createReducer(initialState,
  on( setFilterAction, (state:filterTypes, { filter }) => filter ),
);

export function filterReducer( state:any, action:Action ){
  return _filterReducer(state, action);
}