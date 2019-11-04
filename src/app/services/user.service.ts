import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { Observable } from "rxjs";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "Steve",
        lastName: "Austin",
        email: "steve@gmail.com",
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
        email: "shawn@gmail.com",
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
        email: "kurt@gmail.com",
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
        email: "chris@gmail.com",
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
  }

  getUsers(): Observable<User[]> {
    console.log("fetching users from service");

    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  // example of using an observable to send data
  // getData() {
  //   this.data = new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next(1);
  //     }, 1000);
  //     setTimeout(() => {
  //       observer.next(2);
  //     }, 2000);
  //     setTimeout(() => {
  //       observer.next(3);
  //     }, 3000);
  //     setTimeout(() => {
  //       observer.next(4);
  //     }, 4000);
  //   });
  //   return this.data;
  // }
}
