import { Component, Output} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})

export class TodoListHeaderComponent {
  item: Item = {
    title: '',
  };

  className: string = '';
  constructor(private api: ApiService) { }

  onSubmit() {
    if (this.item.title === '') {
      this.className = 'error-active';
      setTimeout(() => {
        this.className = '';
      }, 2000);
  } else {
      this.api.addTodo(this.item);
      this.item.title = '';
    }
  }



}
