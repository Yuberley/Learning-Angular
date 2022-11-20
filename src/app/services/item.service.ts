import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3000/items';

  items: Item[] = [      
    {
      id: 1,
      title: 'Item One',
      price: 29.99,
      quantity: 1,
      isCompleted: false
    },
    {
      id: 2,
      title: 'Item Two',
      price: 39.99,
      quantity: 1,
      isCompleted: true
    },
    {
      id: 3,
      title: 'Item Three',
      price: 49.99,
      quantity: 1,
      isCompleted: false
    },
  ];

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]> {
    // return this.items;
    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item) {
    this.items.unshift(item);
  }

}
