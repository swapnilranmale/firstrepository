import { Component } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-materialui",
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: "./materialui.component.html",
  styleUrl: "./materialui.component.css",
})
export class MaterialuiComponent {
  onClick(data: any) {
    console.log(data);
  }
}
