import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featurettes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featurettes.html',
  styleUrl: './featurettes.css'
})
export class FeaturettesComponent {
  featurettes = [
    {
      title: 'First featurette heading.',
      highlight: 'It’ll blow your mind.',
      text: 'Some great placeholder content for the first featurette here. Imagine some exciting prose here.'
    },
    {
      title: 'Oh yeah, it’s that good.',
      highlight: 'See for yourself.',
      text: 'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.',
      reverse: true
    },
    {
      title: 'And lastly, this one.',
      highlight: 'Checkmate.',
      text: 'And yes, this is the last block of representative placeholder content. Again, not really intended to be read, simply to show layout with your content.'
    }
  ];
}
