import {Component, Input} from '@angular/core';

import { Todo } from '../../shared/todo';

@Component({
  selector: 'todo-header',
  template: `
    <div class="todo-header">
      <div>All todos: {{ getNumberOfTodos() }}</div>
      <div>Completed todos: {{ getCompletedTodos() }}</div>
      <div>Left todos: {{ getLeftTodos() }}</div>
    </div>
  `,
  styles: [`
      .todo-header {
          display: flex;
          padding: 1em;
          margin-bottom: 1em;
          width: 100%;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),
          0 3px 1px -2px rgba(0, 0, 0, .2),
          0 1px 5px 0 rgba(0, 0, 0, .12);
          border-radius: 2px;
          background-color: white;
      }

      .todo-header div {
          display: inline-block;
          width: 33%;
      }
  `]
})
export default class TodoHeaderComponent {
  @Input() todos: Todo[];

  getNumberOfTodos() {
    return this.todos.length;
  }

  getCompletedTodos() {
    return this.todos.filter(todo => todo.completed).length;
  }

  getLeftTodos() {
    return this.todos.filter(todo => !todo.completed).length;
  }
}