import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input() item: Item;

  @Output()
  remove: EventEmitter<Item> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Item> = new EventEmitter();

  constructor(private api: ApiService) {
  }

  toggleTodoComplete(item: Item) {
    this.toggleComplete.emit(item);
  }

  removeTodo(item: Item) {
    this.api.deleteTodo(item.id);
  }
}
