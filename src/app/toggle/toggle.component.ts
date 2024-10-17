import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import {
  NgbAlertModule,
  NgbProgressbarModule,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-toggle",
  standalone: true,
  imports: [NgIf, NgbAlertModule, NgbProgressbarModule],
  templateUrl: "./toggle.component.html",
  styleUrl: "./toggle.component.css",
})
export class ToggleComponent {
  display: boolean = true;
  dismissible = true;
  onClick() {
    this.display = !this.display;
  }
}
