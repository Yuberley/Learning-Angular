import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {

    this.items = [
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
        isCompleted: true
      },
    ];

  }

}
