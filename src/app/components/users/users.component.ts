import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.sass"]
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

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
        image: "http://lorempixel.com/600/600/people/1"
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
        image: "http://lorempixel.com/600/600/people/2"
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
        image: "http://lorempixel.com/600/600/people/3"
      }
    ];

    this.loaded = true;
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
}
