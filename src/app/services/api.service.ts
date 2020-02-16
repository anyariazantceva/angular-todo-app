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
  constructor(public afs: AngularFirestore) {

  }

  getAllTodos() {
    return this.afs.collection('items', ref => ref.orderBy('title', 'asc')).snapshotChanges();
  }

  addTodo(item: Item) {
    return this.afs.collection('items').add(item);
  }

  updateTodo(item: Item) {
    delete item.id;
    this.afs.doc('items/' + item.id).update(item);
  }

  deleteTodo(itemId: string) {
    this.afs.doc('items/' + itemId).delete();
  }

}


