import { Component } from "@angular/core";

@Component({
  selector: "app-templatereference",
  standalone: true,
  imports: [],
  templateUrl: "./templatereference.component.html",
  styleUrl: "./templatereference.component.css",
})
export class TemplatereferenceComponent {
  getData(item: any) {
    console.log(item);
  }
}
