import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  showTitle: boolean = true;

  title: string = "Titre par défaut";
  isConnected: boolean = false;

  constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //   this.showTitle = !this.showTitle;
    // }, 10000)
  }

  login() {
    this.isConnected = true;
  }

  logout() {
    this.isConnected = false;
  }

}
