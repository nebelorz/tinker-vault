import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contributors-popover',
  imports: [CommonModule],
  templateUrl: './contributors-popover.component.html',
  styleUrl: './contributors-popover.component.css',
})
export class ContributorsPopoverComponent {
  @Input() contributors: { name: string; amount: number }[] = [];
}
