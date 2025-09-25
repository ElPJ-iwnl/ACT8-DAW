import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { HeroCarouselComponent } from './features/hero-carousel/hero-carousel';
import { MarketingComponent } from './features/marketing/marketing';
import { FeaturettesComponent } from './features/featurettes/featurettes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroCarouselComponent,
    MarketingComponent,
    FeaturettesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
