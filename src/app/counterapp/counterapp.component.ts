import { Component } from '@angular/core';
@Component({
  selector: 'app-counterapp',
  standalone: true,
  imports: [],
  templateUrl: './counterapp.component.html',
  styleUrl: './counterapp.component.css',
})
export class CounterappComponent {
  count: number = 0;
  onClick = () => {
    return this.count++;
  };
  onClickDec = () => {
    return this.count--;
  };
  onClickReset = () => {
    return (this.count = 0);
  };
  imgUrl =
    'https://th.bing.com/th/id/OIP.C7T4BbpTK3LSB4cytcLW-AHaE5?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7';
}
