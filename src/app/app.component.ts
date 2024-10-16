import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterappComponent } from './counterapp/counterapp.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { CommonModule, NgIf } from '@angular/common';
import { NestedloopComponent } from './nestedloop/nestedloop.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CounterappComponent,
    ConditionsComponent,
    NestedloopComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'counter';
}
