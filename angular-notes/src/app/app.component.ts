import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Insomnia\'s Angular Notes';

  components: Array<any> = [
    "Button",
    "Toggle",
    "tmp 1",
    "tmp 2",
    "tmp 3",
    "tmp 4",
    "tmp 5"
  ];
}
