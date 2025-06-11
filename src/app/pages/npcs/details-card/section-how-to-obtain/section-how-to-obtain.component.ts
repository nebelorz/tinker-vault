import { Component, Input } from "@angular/core";

@Component({
    selector: "app-section-how-to-obtain",
    standalone: true,
    imports: [],
    templateUrl: "./section-how-to-obtain.component.html",
})
export class SectionHowToObtainComponent {
    @Input() text? = "";
}
