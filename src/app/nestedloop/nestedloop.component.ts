import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedloop',
  standalone: true,
  imports: [NgFor],
  templateUrl: './nestedloop.component.html',
  styleUrl: './nestedloop.component.css',
})
export class NestedloopComponent {
  users = [
    {
      name: 'Swapnil',
      phone: 12345678,
      socialAccounts: ['linkidin', 'whatsapp', 'instagram'],
    },
    {
      name: 'Tushar',
      phone: 12345678,
      socialAccounts: ['linkidin', 'whatsapp', 'instagram'],
    },
    {
      name: 'Rohit',
      phone: 12345678,
      socialAccounts: ['linkidin', 'whatsapp', 'instagram'],
    },
  ];
}
