import { CommonModule, NgFor } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { FormsModule, NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-forms",
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: "./forms.component.html",
  styleUrl: "./forms.component.css",
})
export class FormsComponent {
  udata: any = {};
  onSubmit(data: NgForm) {
    console.log(data);
    this.udata = data;
  }
}
