import { Component } from '@angular/core';

import TodoService from '../../shared/todo.service';

@Component({
  selector: 'todo-form',
  template: `
    <form class="todo-form" (ngSubmit)="onSubmit(); todoForm.reset()" #todoForm="ngForm">
      <input type="text" name="title" [(ngModel)]="title" placeholder="What should we do?" required>
      <button type="submit" [disabled]="todoForm.form.invalid">Add</button>
    </form>
  `,
  styles: [`    
      .todo-form {
          width: 100%;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 
                      0 3px 1px -2px rgba(0, 0, 0, .2), 
                      0 1px 5px 0 rgba(0, 0, 0, .12);
          border-radius: 2px;
          background-color: white;
      }

      .todo-form {
          display: flex;
          padding: 1em;
          margin-bottom: 1em;
      }

      .todo-form input {
          flex: 1;
      }

      .todo-form input:focus {
          border: 1px solid #1976D2;
      }

      .todo-form input:focus.ng-invalid.ng-dirty {
          border: 1px solid #dd0031;
      }

      .todo-form button {
          margin-left: 16px;
      }
  `]
})
export default class TodoFormComponent {
  title: string = '';

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.todoService.createTodo(this.title);
  }
}