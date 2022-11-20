import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
})
export class TotalComponent implements OnInit {

  @Input() total:number = 0;
  @Input() message:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
