import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownPosition } from '../../../../types/dropdown-position.types';

@Component({
  selector: 'app-more-contributors-popover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more-contributors-popover.component.html',
  styleUrls: ['./more-contributors-popover.component.css'],
})
export class ContributorsPopoverComponent {
  @Input() contributors: { name: string; amount: number }[] = [];
  @Input() dropdownPosition: DropdownPosition = 'bottom';
}
