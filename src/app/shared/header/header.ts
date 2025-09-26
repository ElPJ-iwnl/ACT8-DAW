import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type NavLink = {
  label: string;
  href: string;
  active?: boolean;
  disabled?: boolean;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],       
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  navLinks: NavLink[] = [
    { label: 'Home', href: '#', active: true },
    { label: 'Link', href: '#' },
    { label: 'Disabled', href: '#', disabled: true }
  ];
}
