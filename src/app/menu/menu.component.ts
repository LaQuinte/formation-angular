import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //user: User = {3, "Laurent", "lq@econocom.com"};

  userName: User = new User;

  menuItems = {
    tasks: "Tâches",
    ideas: "Idées",
    myAccount: "Mon compte",
    myTasks: "Mes tâches",
    myIdeas: "Mes idées"
  }

  constructor() { 
    this.userName.name = "Laurent";
  }

  ngOnInit() {
  }

}
