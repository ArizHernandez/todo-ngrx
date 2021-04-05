import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as actions from '../../todo.actions';

import { Todo } from '../../models/todo-models';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputFisico') txtInputFisico: ElementRef = <any>[];
  @Input() todo:Todo = { id:1234, text:"", isCompleted: false };  

  chkCompleted:FormControl;
  txtInput:FormControl;
  isEditing: boolean = false;

  constructor( private store: Store<AppState> ) { 
    this.chkCompleted = new FormControl( '' );
    this.txtInput = new FormControl( '', [Validators.required,Validators.min(3)] );
  }

  ngOnInit(): void {
    this.chkCompleted.setValue( this.todo.isCompleted );
    this.txtInput.setValue(this.todo.text);

    this.chkCompleted.valueChanges
      .subscribe( value => {
        this.store.dispatch( actions.toggleCompletedAction({ id: this.todo.id }) )
      })
  }

  edit(){
    this.isEditing = true;

    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  endEditing(){
    this.isEditing = false;

    if( this.txtInput.valid && this.txtInput.value !== this.todo.text ){
      this.store.dispatch( actions.changeTextAction({ id: this.todo.id, text: this.txtInput.value }) );
    }
  }

  delete(){
    this.store.dispatch( actions.deleteTodoAction({ id: this.todo.id }) );
  }

}
