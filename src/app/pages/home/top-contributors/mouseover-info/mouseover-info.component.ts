import { Component } from "@angular/core";

import { LucideAngularModule, InfoIcon } from "lucide-angular";

@Component({
    selector: "app-mouseover-info",
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: "./mouseover-info.component.html",
    styleUrl: "./mouseover-info.component.css",
})
export class MouseoverInfoComponent {
    readonly iconInfo = InfoIcon;
}
