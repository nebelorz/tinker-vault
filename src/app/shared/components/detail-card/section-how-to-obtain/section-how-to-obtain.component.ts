import { Component, Input } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-section-how-to-obtain",
    standalone: true,
    imports: [NgIf],
    templateUrl: "./section-how-to-obtain.component.html",
})
export class SectionHowToObtainComponent {
    @Input() text? = "";
}
