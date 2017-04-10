import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../shared/todo';
import TodoService from "../../shared/todo.service";

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item" [class.completed]="todo.completed">
      <button class="checkbox icon" (click)="onToggle(todo)">
        <i class="material-icons">{{ todo.completed ? 'check_box' : 'check_box_outline_blank' }}</i>
      </button>

      <span class="title">{{ todo.title }}</span>

      <div class="actions">
        <button class="delete icon" (click)="onDelete(todo)">
          <i class="material-icons">delete</i>
        </button>
      </div>
    </div>
  `,
  styles: [`
      .todo-item {
          padding: 1em;
          display: flex;
          align-items: center;
      }

      .todo-item .checkbox {
          margin-right: .25em;
      }

      .todo-item.completed .title {
          text-decoration: line-through;
      }

      .todo-item.completed .title,
      .todo-item.completed .material-icons {
          color: lightgray;
      }

      .todo-item input {
          flex: 1;
          margin-right: 1rem;
      }

      .todo-item .actions {
          margin-left: auto;
          opacity: 0;
          transition: all .2s;
      }

      .todo-item:hover .actions {
          opacity: 1;
      }
  `]
})
export default class TodoItemComponent {
  @Input() todo: Todo;
  @Output() deleteItem = new EventEmitter();

  constructor(private todoService : TodoService) {}

  onToggle() {
   this.todoService.toggleTodo(this.todo);
  }

  onDelete() {
    this.deleteItem.emit(this.todo);
  }


}