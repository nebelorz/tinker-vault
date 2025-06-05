import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LucideAngularModule, AwardIcon } from "lucide-angular";

import { CONTRIBUTORS } from "../../../../assets/data/contributors";
import type { Contributor } from "../../../interfaces/contributor.interface";

import { ContributorsPopoverComponent } from "./more-contributors-popover/more-contributors-popover.component";
import { MouseoverInfoComponent } from "./mouseover-info/mouseover-info.component";

@Component({
    selector: "app-top-contributors",
    standalone: true,
    imports: [CommonModule, LucideAngularModule, ContributorsPopoverComponent, MouseoverInfoComponent],
    templateUrl: "./top-contributors.component.html",
    styleUrls: ["./top-contributors.component.css"],
})
export class TopContributorsComponent {
    contributors: Contributor[] = CONTRIBUTORS;

    readonly iconAward = AwardIcon;

    getTopContributors(amountOfContributors: number = 3): Contributor[] {
        return [...this.contributors].sort((a, b) => b.amount - a.amount).slice(0, amountOfContributors);
    }

    getRestOfContributors(): Contributor[] {
        return [...this.contributors].sort((a, b) => b.amount - a.amount).slice(3);
    }
}
