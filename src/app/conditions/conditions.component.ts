import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css',
})
export class ConditionsComponent {
  isCar: boolean = false;
}
