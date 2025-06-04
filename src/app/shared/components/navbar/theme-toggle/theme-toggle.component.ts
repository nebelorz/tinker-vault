import { Component } from "@angular/core";

import { LucideAngularModule, MoonIcon, SunMediumIcon } from "lucide-angular";

@Component({
    selector: "app-theme-toggle",
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: "./theme-toggle.component.html",
    styleUrls: ["./theme-toggle.component.css"],
})
export class ThemeToggleComponent {
    theme: "dim" | "retro" = (localStorage.getItem("theme") as "dim" | "retro") ?? document.documentElement.getAttribute("data-theme");
    iconClicked = false;
    readonly iconDark = MoonIcon;
    readonly iconLight = SunMediumIcon;

    ngOnInit() {
        document.documentElement.setAttribute("data-theme", this.theme);
    }

    onToggleTheme() {
        this.theme = this.theme === "dim" ? "retro" : "dim";
        document.documentElement.setAttribute("data-theme", this.theme);
        localStorage.setItem("theme", this.theme);
    }

    onClickAnimation() {
        this.iconClicked = true;
        setTimeout(() => {
            this.iconClicked = false;
        }, 500);
    }
}
