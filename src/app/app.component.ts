import { Component } from '@angular/core';
import { ApiService} from './services/api.service';
import {Item} from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent {
  items: Item[];
  constructor(private api: ApiService) {
    this.api.getAllTodos().subscribe(changes => {
      this.items = changes.map(e => {
        const data = e.payload.doc.data() as Item;
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }

}
