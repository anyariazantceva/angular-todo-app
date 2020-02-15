import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import set = Reflect.set;

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})

export class TodoListHeaderComponent {
  newTodo: Todo = new Todo();
  className: string = "";
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  addTodo() {
    if (this.newTodo.title === '') {
       this.className = "error-active";
        setTimeout(() => {
        this.className = "";
      },2000);
    } else {
      this.add.emit(this.newTodo);
      this.newTodo = new Todo();
    }
  }




}
