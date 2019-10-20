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
        }
      },
      {
        firstName: "Shawn",
        lastName: "Michaels",
        age: 60,
        address: {
          street: "Gwanak-gu",
          city: "Seoul",
          country: "Korea"
        }
      },
      {
        firstName: "User",
        lastName: "One",
        age: 100,
        address: {
          street: "Main Street",
          city: "Rome",
          country: "Italy"
        }
      }
    ];

    this.loaded = true;
    // }, 2000);

    this.showExtended = false;

    this.addUser({
      firstName: "User",
      lastName: "Two",
      age: 100
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
