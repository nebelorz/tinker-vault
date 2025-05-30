import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { MoreOptionsComponent } from "./more-options/more-options.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ThemeToggleComponent, MoreOptionsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
