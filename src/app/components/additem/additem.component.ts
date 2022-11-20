import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  } 

  onSubmit() {
    const newItem = new Item();
    newItem.id = this.id;
    newItem.title = this.title;
    newItem.price = this.price;
    newItem.quantity = this.quantity;
    newItem.isCompleted = false;

    this.itemService.addItem(newItem);
    this.router.navigate(['/']);
    

  }
  
}
