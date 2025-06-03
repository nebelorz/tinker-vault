import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent {
  public theme: 'dark' | 'retro' =
    (localStorage.getItem('theme') as 'dark' | 'retro') ??
    document.documentElement.getAttribute('data-theme');

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  public onToggleTheme() {
    this.theme = this.theme === 'dark' ? 'retro' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }
}
