import { Component, Input } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";

@Component({
    selector: "app-section-home-requirements",
    standalone: true,
    imports: [NgIf, NgFor],
    templateUrl: "./section-home-requirements.component.html",
})
export class SectionHomeRequirements {
    @Input() homeRequirements: string[] = [];
}
