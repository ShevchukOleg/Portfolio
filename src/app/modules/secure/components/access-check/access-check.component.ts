import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { environment } from "../../../../../environments/environment";
import { MyErrorStateMatcher } from "../../../../helpers/errorStateMatcher";

@Component({
  selector: "app-access-check",
  templateUrl: "./access-check.component.html",
  styleUrls: ["./access-check.component.css"],
})
export class AccessCheckComponent implements OnInit {
  public passwordForm: FormGroup;
  public matcher = new MyErrorStateMatcher();
  private password = environment.applicationAccess;

  constructor(private router: Router, private messageService: MessageService) {}

  public count = 0;

  ngOnInit() {
    this.passwordForm = new FormGroup({
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  public getAccess() {
    const usersPass = this.passwordForm.get("password").value;
    if (this.password === usersPass && this.count < 3) {
      localStorage.setItem("доступ", "дозволено");
      this.messageService.add({
        severity: "success",
        summary: "Access allow",
        detail: "thanks",
      });
      this.router.navigate([`/skills`]);
    } else if (this.password !== usersPass && this.count < 3) {
      this.count += 1;
      this.passwordForm.reset();
      this.messageService.add({
        severity: "warn",
        summary: "Access is denied",
        detail: "Wrong password",
      });
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Access closed",
        detail: "Wrong password 3 times.",
      });
      this.passwordForm.reset();
    }
  }
}
