import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from '../todo';
import { ApiService } from '../services/api.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() items: Item[];
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.getAllTodos().subscribe(changes => {
      this.items = changes.map(e => {
          const data = e.payload.doc.data() as Item;
          data.id = e.payload.doc.id;
          return data;
      });
    });
  }

  create(item: Item) {
    this.api.addTodo(item);
  }

  update(item: Item) {
    this.api.updateTodo(item);
  }

  delete(id: string) {
    this.api.deleteTodo(id);
  }

}
