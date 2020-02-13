import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];
  doneCount;
  todoCount;
  constructor() { }

  addTodo(todo: Todo): TodoDataService {
      if (!todo.id) {
        todo.id = ++this.lastId;
      }
      this.todos.push(todo);
      return this;


  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      done: !todo.done
    });
    return updatedTodo;
  }
  getCompletedTodos (todos) {
    return this.doneCount = todos
      .filter((el) => el.done).length;
  }
  getNotCompletedTodos (todos) {
    return this.todoCount = todos.length - this.doneCount;
  }
  search(items, term) {
    if (term.length === '') {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().includes(term.toLowerCase());
    });
  };


}
