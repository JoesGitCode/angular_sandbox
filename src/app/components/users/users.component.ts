import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};

  constructor() {}

  ngOnInit() {
    // can wrap this in a set timeout to mimic loading data from and external source
    // setTimeout(() => {
    this.users = [
      {
        firstName: "Steve",
        lastName: "Austin",
        age: 50,
        address: {
          street: "Princes Street",
          city: "Edinburgh",
          country: "Scotland"
        },
        image: "http://lorempixel.com/600/600/people/1",
        isActive: true
      },
      {
        firstName: "Shawn",
        lastName: "Michaels",
        age: 60,
        address: {
          street: "Gwanak-gu",
          city: "Seoul",
          country: "Korea"
        },
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false
      },
      {
        firstName: "User",
        lastName: "One",
        age: 100,
        address: {
          street: "Main Street",
          city: "Rome",
          country: "Italy"
        },
        image: "http://lorempixel.com/600/600/people/3",
        isActive: true
      }
    ];

    this.loaded = true;
    this.setCurrentClasses();
    // }, 2000);

    this.showExtended = true;

    // this.addUser({
    //   firstName: "User",
    //   lastName: "Two",
    //   age: 100
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd,
      "big-text": this.showExtended
    };
  }
}
