import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LucideAngularModule, ChevronRightSquareIcon, AwardIcon } from "lucide-angular";

@Component({
    selector: "app-more-contributors-popover",
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: "./more-contributors-popover.component.html",
    styleUrls: ["./more-contributors-popover.component.css"],
})
export class ContributorsPopoverComponent {
    @Input() contributors: { name: string; amount: number }[] = [];

    readonly iconChevronRight = ChevronRightSquareIcon;
    readonly iconAward = AwardIcon;
}
