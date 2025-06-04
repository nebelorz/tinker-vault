import { Component } from "@angular/core";

import { LucideAngularModule, MenuIcon } from "lucide-angular";

@Component({
    selector: "app-more-options",
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: "./more-options.component.html",
    styleUrl: "./more-options.component.css",
})
export class MoreOptionsComponent {
    readonly iconMenu = MenuIcon;
}
