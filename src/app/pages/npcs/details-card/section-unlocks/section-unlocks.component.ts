import { Component, input } from "@angular/core";

@Component({
    selector: "app-section-unlocks",
    standalone: true,
    imports: [],
    templateUrl: "./section-unlocks.component.html",
})
export class SectionUnlocksComponent {
    unlocks = input<string[]>([]);
}
