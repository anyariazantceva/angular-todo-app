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
  constructor(private todoDataService: TodoDataService) {
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onRemoveTodo(todo: Todo) {
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
