import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducers';
import { Todo } from '../../models/todo-models';
import { filterTypes } from '../../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[] = [];
  currentFilter:filterTypes = 'all';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store
      .subscribe( ({todos, filters}) => {
        this.todos = todos;
        this.currentFilter = filters;
      });
  }

}
