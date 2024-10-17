import { CommonModule } from "@angular/common";
import { Component, Pipe } from "@angular/core";
import { UsdinrPipe } from "../pipes/usdinr.pipe";

@Component({
  selector: "app-templatereference",
  standalone: true,
  imports: [CommonModule, UsdinrPipe],
  templateUrl: "./templatereference.component.html",
  styleUrl: "./templatereference.component.css",
})
export class TemplatereferenceComponent {
  nameoftitle = "thinkitive tech";
  getData(item: any) {
    console.log(item);
  }
  today = Date.now();

  users = [{ name: "swapnil", email: "swapnilranmale@thinkitive.com" }];

  carNumber = 25000.39028;
}
