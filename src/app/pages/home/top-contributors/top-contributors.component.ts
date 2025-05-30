import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributorsPopoverComponent } from './contributors-popover/contributors-popover.component';

@Component({
  selector: 'app-top-contributors',
  imports: [CommonModule, ContributorsPopoverComponent],
  templateUrl: './top-contributors.component.html',
  styleUrls: ['./top-contributors.component.css'],
})
export class TopContributorsComponent {
  contributors = [
    { name: 'nebelorz', amount: 100 },
    { name: 'perkely', amount: 99 },
    { name: 'tinkerlandsFan', amount: 99 },
    { name: 'user12', amount: 5 },
    { name: 'user13', amount: 2 },
  ];

  public getTopContributors(topContributorsNumber: number = 3) {
    return this.getContributorsSorted().slice(0, topContributorsNumber);
  }

  public getRestOfContributors() {
    return this.getContributorsSorted().slice(3);
  }

  private getContributorsSorted() {
    return [...this.contributors].sort((a, b) => b.amount - a.amount);
  }
}
