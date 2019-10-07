import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loading: boolean = false;
  loadData() {
    this.loading = true;

    setTimeout(() => {
     this.loading = false;
    }, 5000);
  }
}
