import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketing.html',
  styleUrl: './marketing.css'
})
export class MarketingComponent {
  cards = [
    { title: 'Heading', text: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column.' },
    { title: 'Heading', text: 'Another exciting bit of representative placeholder content. This time, we\'ve moved on to the second column.' },
    { title: 'Heading', text: 'And lastly this, the third column of representative placeholder content.' }
  ];
}
