import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, AwardIcon, Maximize2Icon, Minimize2Icon } from "lucide-angular";

import { extractContributorsData, sortContributorsByAmount, getTopContributors } from "../../../shared/utils/extract-contributors-data.util";

import type { Contributor } from "../../../interfaces/contributor.interface";

import { MouseoverInfoComponent } from "./mouseover-info/mouseover-info.component";

@Component({
    selector: "app-top-contributors",
    standalone: true,
    imports: [CommonModule, LucideAngularModule, MouseoverInfoComponent],
    templateUrl: "./top-contributors.component.html",
    styleUrls: ["./top-contributors.component.css"],
})
export class TopContributorsComponent implements OnInit {
    contributors: Contributor[] = [];
    readonly iconAward = AwardIcon;
    readonly iconMaximize = Maximize2Icon;
    readonly iconMinimize = Minimize2Icon;

    expanded = false;

    ngOnInit(): void {
        this.contributors = extractContributorsData();
    }

    getTopContributors(amountOfContributors: number = 3): Contributor[] {
        return getTopContributors(this.contributors, amountOfContributors);
    }

    toggleContributors(event: Event) {
        event.preventDefault();
        this.expanded = !this.expanded;
    }

    get contributorsSorted(): Contributor[] {
        return sortContributorsByAmount(this.contributors);
    }
}
