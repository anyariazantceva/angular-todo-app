import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;
  doneCount;
  todoCount;
  constructor(public afs: AngularFirestore) {

  }

  getAllTodos() {
    return this.afs.collection('items', ref => ref.orderBy('title', 'asc')).snapshotChanges();
  }

  addTodo(item: Item) {
    return this.afs.collection('items').add(item);
  }

  updateTodo(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }

  deleteTodo(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }
  getCompletedTodos(items) {
    return this.doneCount = items
      .filter((el) => el.done).length;
  }
  getNotCompletedTodos(items) {
    return this.todoCount = items.length - this.doneCount;
  }

}


