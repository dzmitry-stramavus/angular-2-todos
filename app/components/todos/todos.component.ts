import { Component, OnInit } from '@angular/core';

import { Todo } from '../../shared/todo';
import TodoService from '../../shared/todo.service';

@Component({
  selector: 'todos',
  template: `
    <todo-header [todos]="todos"></todo-header>

    <todo-form></todo-form>

    <todo-list [todos]="todos"></todo-list>
  `,
  styles: [`
      todo-list, todo-form, todo-header {
          width: 100%;
      }
  `]
})
export default class TodosComponent implements OnInit{
  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}