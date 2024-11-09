import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FeatureComponent } from '../feature/feature.component';
import { AboutComponentComponent } from '../about-component/about-component.component';
import { PresentationComponent } from '../presentation/presentation.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FeatureComponent, AboutComponentComponent, PresentationComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
