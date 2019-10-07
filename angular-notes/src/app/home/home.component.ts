import {Component, OnInit} from '@angular/core';
import {RouterObject} from './router.object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  components: Array<RouterObject> = [
    new RouterObject("Typography", "/typography"),
    new RouterObject("Button", "/button"),
    new RouterObject("button", "/button"),
    new RouterObject("button", "/button"),
    new RouterObject("button", "/button"),
    new RouterObject("button", "/button"),
  ];
}
