import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CONTRIBUTORS } from '../../../../assets/data/contributors';
import type { Contributor } from '../../../interfaces/contributor.interface';

import { ContributorsPopoverComponent } from './more-contributors-popover/more-contributors-popover.component';
import { HowToContributeMouseoverComponent } from '../../../shared/components/how-to-contribute-mouseover/how-to-contribute-mouseover.component';

@Component({
  selector: 'app-top-contributors',
  standalone: true,
  imports: [
    CommonModule,
    ContributorsPopoverComponent,
    HowToContributeMouseoverComponent,
  ],
  templateUrl: './top-contributors.component.html',
  styleUrls: ['./top-contributors.component.css'],
})
export class TopContributorsComponent {
  contributors: Contributor[] = CONTRIBUTORS;

  getTopContributors(topContributorsNumber: number = 3): Contributor[] {
    return [...this.contributors]
      .sort((a, b) => b.amount - a.amount)
      .slice(0, topContributorsNumber);
  }

  getRestOfContributors(): Contributor[] {
    return [...this.contributors].sort((a, b) => b.amount - a.amount).slice(3);
  }
}
