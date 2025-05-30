import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent implements AfterViewInit {
  theme: 'retro' | 'dark' = 'retro';

  ngAfterViewInit() {
    const saved = localStorage.getItem('theme');
    this.theme = saved === 'dark' ? 'dark' : 'retro';
    this.setTheme(this.theme);

    const checkbox = document.querySelector<HTMLInputElement>(
      'input.theme-controller'
    );

    if (checkbox) {
      checkbox.checked = this.theme === 'dark';
      checkbox.addEventListener('change', () =>
        this.toggleTheme(checkbox.checked)
      );
    }
  }

  toggleTheme(isdark: boolean) {
    this.theme = isdark ? 'dark' : 'retro';
    this.setTheme(this.theme);
    localStorage.setItem('theme', this.theme);
  }

  setTheme(theme: 'retro' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
