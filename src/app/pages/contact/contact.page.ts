import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Form } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
})
export class ContactPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  register(form: Form) {
    console.log("form", form);
    this.router.navigate(["/app/tabs/about"]);
  }
}
