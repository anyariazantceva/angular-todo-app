import { Component } from '@angular/core';
import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();
  term: string = '';
  constructor(private todoDataService: TodoDataService) {
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
  getCompletedTodos (todos) {
    return this.todoDataService.getCompletedTodos(todos);
  }
  getNotCompletedTodos (todos) {
    return this.todoDataService.getNotCompletedTodos(todos);
  }

}
