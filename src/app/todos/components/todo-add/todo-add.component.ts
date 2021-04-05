import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { createTodoAction } from '../../todo.actions';

import { AppState } from '../../../app.reducers';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { 
    this.txtInput = new FormControl('', [ Validators.required, Validators.min(3) ]);
  }

  ngOnInit(): void {
  }

  createNewTodo( ){
    if( this.txtInput.invalid ){ return; }

    this.store.dispatch( createTodoAction({ text: this.txtInput.value }) );
    this.txtInput.reset();
  }

}
