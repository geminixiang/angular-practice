import { Component } from "@angular/core";

@Component({
  selector: "app-birthday",
  template: `
    <p>The hero's birthday is {{ birthday | date: format }}</p>
    <button (click)="toggleFormat()">Toggle Format</button>

    <p>The gemini's birthday is {{ birthday2 | date: format2 }}</p>
    <button (click)="toggleFormat2()">Toggle Format</button>
  `
})
export class BirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  birthday2 = new Date(1996, 5, 17);
  toggle = true; // start with true == shortDate
  toggle2 = true;

  get format() {
    return this.toggle ? "shortDate" : "fullDate";
  }
  get format2() {
    return this.toggle2 ? "shortDate" : "fullDate";
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
  toggleFormat2() {
    this.toggle2 = !this.toggle2;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
