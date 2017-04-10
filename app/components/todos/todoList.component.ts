import { Component, Input } from '@angular/core';

import { Todo } from '../../shared/todo';
import TodoService from '../../shared/todo.service';

@Component({
  selector: 'todo-list',
  template: `
    <div class="todo-list" *ngIf="todos.length">
      <todo-item *ngFor="let todo of todos" 
                 [todo]="todo"
                 (deleteItem)="deleteItem($event)">
      </todo-item>
    </div>
  `,
  styles: [`    
      .todo-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 
                      0 3px 1px -2px rgba(0, 0, 0, .2), 
                      0 1px 5px 0 rgba(0, 0, 0, .12);
          border-radius: 2px;
          background-color: white;
      }

      todo-item:not(:first-child) .todo-item {
          border-top: 1px solid rgba(0, 0, 0, .1);
      }
  `]
})
export default class TodoListComponent {
  @Input() todos: Todo[];

  constructor(private todoService: TodoService) {}

  deleteItem(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

}