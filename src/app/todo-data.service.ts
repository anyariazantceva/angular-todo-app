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
    if (todo.title === '') {
      alert('Please enter the value!');
    } else {
      if (!todo.id) {
        todo.id = this.lastId++;
      }
      this.todos.push(todo);
      return this;
    }

  }

  deleteItem = (id) => {
      const idx = this.todos.findIndex((el) => el.id === id);
      const newArray = [
        ...this.todos.slice(0, idx), ...this.todos.slice(idx + 1)
      ];
      return this.todos = newArray;
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
