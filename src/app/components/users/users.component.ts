import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../models/User";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: "",
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
  @ViewChild("userForm", { static: false }) form: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
    // can wrap this in a set timeout to mimic loading data from and external source
    // setTimeout(() => {

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

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     age: null,
  //     address: {
  //       street: "",
  //       city: "",
  //       country: ""
  //     }
  //   };
  // }

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

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form is not valid");
    } else {
      console.log(value);

      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);
      this.form.reset();
    }
  }

  // instead of putting the function here, it can be put in the button click html
  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
}
