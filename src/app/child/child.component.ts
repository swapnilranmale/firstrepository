import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  standalone: true,
  imports: [],
  templateUrl: "./child.component.html",
  styleUrl: "./child.component.css",
})
export class ChildComponent {
  @Input() item = 0;
  @Input() user = "abc";
  @Output() updateDataEvent = new EventEmitter<string>();
}
