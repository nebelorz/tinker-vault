import { Component, Input } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";

@Component({
    selector: "app-section-unlocks",
    standalone: true,
    imports: [NgIf, NgFor],
    templateUrl: "./section-unlocks.component.html",
})
export class SectionUnlocksComponent {
    @Input() unlocks: string[] = [];
}
