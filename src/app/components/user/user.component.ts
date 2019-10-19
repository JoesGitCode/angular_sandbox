import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  // using an interface for the user to make it more modular. put interface in another file
  user: User;

  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: "User",
      lastName: "One",
      age: 100,
      address: {
        street: "Princes Street",
        city: "Edinburgh",
        country: "Scotland"
      }
    };
  }

  userSpeak() {
    return `Hello, my name is ${this.user.firstName} ${this.user.lastName}`;
  }

  addNum(num1: number, num2: number): number {
    return num1 + num2;
  }
}

// Examples of Typescript types

// firstName: string;
// lastName: string;
// age: number;
// address;
// anyType: any;
// hasBeard: boolean;
// numberArray: number[];
// stringArray: string[];
// mixedArray: any[];

// this.anyType = 45;
// this.hasBeard = true;
// this.numberArray = [1, 2, 3];
// this.stringArray = ["1", "2"];
// this.mixedArray = ["1", 2];
