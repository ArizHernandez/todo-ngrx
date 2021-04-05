import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

import { TodoPageComponent } from './pages/todo-page/todo-page.component';

import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterTodoPipe } from './pipes/filter-todo.pipe';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoPageComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    FilterTodoPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent,
  ]
})
export class TodoModule { }
