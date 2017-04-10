import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import AppComponent from './app.component';
import TodosComponent from './components/todos/todos.component';
import TodoHeaderComponent from './components/todos/todoHeader.component';
import TodoFormComponent from './components/todos/todoForm.component';
import TodoListComponent from './components/todos/todoList.component';
import TodoItemComponent from './components/todos/todoItem.component';

import TodoService from './shared/todo.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TodosComponent,
    TodoHeaderComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}