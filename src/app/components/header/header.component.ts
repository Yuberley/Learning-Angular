import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  router = {
    title: 'Shopping List',
    url: '/'

  }


  constructor() { }

  ngOnInit(): void {
  }

}
