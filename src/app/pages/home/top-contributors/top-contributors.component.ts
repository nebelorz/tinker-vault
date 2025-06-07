import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LucideAngularModule, AwardIcon, Maximize2Icon, Minimize2Icon } from "lucide-angular";

import { TopContributorsService } from "./top-contributors.service";

import type { Contributor } from "../../../interfaces/contributor.interface";

import { MouseoverInfoComponent } from "./mouseover-info/mouseover-info.component";

@Component({
    selector: "app-top-contributors",
    standalone: true,
    imports: [CommonModule, LucideAngularModule, MouseoverInfoComponent],
    templateUrl: "./top-contributors.component.html",
    styleUrls: ["./top-contributors.component.css"],
})
export class TopContributorsComponent {
    contributors: Contributor[] = [];
    readonly iconAward = AwardIcon;
    readonly iconMaximize = Maximize2Icon;
    readonly iconMinimize = Minimize2Icon;

    expanded = false;

    constructor(private contributorsService: TopContributorsService) {}

    async ngOnInit() {
        this.contributors = await this.contributorsService.getContributors();
    }

    getTopContributors(amountOfContributors: number = 3): Contributor[] {
        return [...this.contributors].sort((a, b) => b.amount - a.amount).slice(0, amountOfContributors);
    }

    toggleContributors(event: Event) {
        event.preventDefault();
        this.expanded = !this.expanded;
    }

    get contributorsSorted(): Contributor[] {
        return [...this.contributors].sort((a, b) => b.amount - a.amount);
    }
}
