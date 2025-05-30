import { Component } from '@angular/core';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { TopContributorsComponent } from './top-contributors/top-contributors.component';

@Component({
  selector: 'app-home',
  imports: [WelcomeCardComponent, TopContributorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
