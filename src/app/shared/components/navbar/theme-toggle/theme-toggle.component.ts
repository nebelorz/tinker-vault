import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent implements AfterViewInit {
  theme: 'light' | 'dark' = 'light';

  ngAfterViewInit() {
    const saved = localStorage.getItem('theme');
    this.theme = saved === 'dark' ? 'dark' : 'light';
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

  toggleTheme(isDark: boolean) {
    this.theme = isDark ? 'dark' : 'light';
    this.setTheme(this.theme);
    localStorage.setItem('theme', this.theme);
  }

  setTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
