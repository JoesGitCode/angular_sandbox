import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    age: null,
    address: {
      street: "",
      city: "",
      country: ""
    }
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;

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
        isActive: true,
        balance: 53,
        registered: new Date("2/5/2019"),
        hide: true
      },
      {
        firstName: "Shawn",
        lastName: "Michaels",
        age: 62,
        address: {
          street: "Gwanak-gu",
          city: "Seoul",
          country: "Korea"
        },
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        balance: 80,
        registered: new Date("6/25/2018"),
        hide: true
      },
      {
        firstName: "Kurt",
        lastName: "Angle",
        age: 48,
        address: {
          street: "Main Street",
          city: "Rome",
          country: "Italy"
        },
        image: "http://lorempixel.com/600/600/people/3",
        isActive: false,
        balance: 30,
        registered: new Date("7/2/2015"),
        hide: true
      },
      {
        firstName: "Chris",
        lastName: "Benoit",
        age: 44,
        address: {
          street: "First Street",
          city: "Kathmandu",
          country: "Nepal"
        },
        image: "http://lorempixel.com/600/600/people/4",
        isActive: true,
        balance: 40,
        registered: new Date("6/3/2015"),
        hide: true
      }
    ];

    this.loaded = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
    // }, 2000);

    // this.showExtended = false;

    // this.addUser({
    //   firstName: "User",
    //   lastName: "Two",
    //   age: 100
    // });
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: "",
      lastName: "",
      age: null,
      address: {
        street: "",
        city: "",
        country: ""
      }
    };
  }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      "padding-top": this.showExtended ? "0" : "40px",
      "font-size": this.showExtended ? "" : "30px"
    };
  }

  onSubmit(event) {
    event.preventDefault();
  }

  // instead of putting the function here, it can be put in the button click html
  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
}
