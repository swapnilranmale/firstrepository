import { CommonModule, NgFor } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
})
export class TodoComponent {
  allTasks: any[] = [];
  addTask(item: string) {
    console.log(item);
    this.allTasks.push({ id: this.allTasks.length, name: item });
    console.log(this.allTasks);
  }
  onRemove(id: number) {
    this.allTasks = this.allTasks.filter((item) => item.id !== id);
  }
}
