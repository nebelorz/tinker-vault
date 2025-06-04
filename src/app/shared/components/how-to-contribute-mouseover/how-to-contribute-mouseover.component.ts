import { Component, Input } from "@angular/core";

import { LucideAngularModule, InfoIcon } from "lucide-angular";

@Component({
    selector: "app-how-to-contribute-mouseover",
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: "./how-to-contribute-mouseover.component.html",
    styleUrl: "./how-to-contribute-mouseover.component.css",
})
export class HowToContributeMouseoverComponent {
    @Input() iconSize: number = 16;

    iconInfo = InfoIcon;
}
