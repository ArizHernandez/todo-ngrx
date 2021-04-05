import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../../app.reducers';
import { filterTypes } from '../../../filter/filter.actions';
import * as actions from '../../../filter/filter.actions';
import { clearCompletedAction } from '../../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter:actions.filterTypes = 'all';
  filters:actions.filterTypes[] = ['all', 'completed', 'pending'];
  currentPending:number = 0;

  constructor( private store:Store<AppState> ) { }

  ngOnInit(): void {
    this.store
      .subscribe( ({ todos, filters }) => {
        this.actualFilter = filters;
        this.currentPending = todos.filter( todo => todo.isCompleted === false ).length;
      });
  }

  changeFilter( filter:filterTypes ){
    this.store.dispatch( actions.setFilterAction({ filter }) );
  }

  clearCompleted(){
    this.store.dispatch( clearCompletedAction() );
  }
}
