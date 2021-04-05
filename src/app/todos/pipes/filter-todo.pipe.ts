import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo-models';
import { filterTypes } from '../../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterTypes = 'all' ): Todo[] {

    switch( filter ){
      case 'completed':
        return todos.filter( todo => todo.isCompleted === true );
      case 'pending':
        return todos.filter( todo => todo.isCompleted === false );
      default:
        return todos;
    }

  }

}
