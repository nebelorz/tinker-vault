import { Component, Input } from "@angular/core";

@Component({
    selector: "app-section-collaborate",
    standalone: true,
    templateUrl: "./section-collaborate.component.html",
})
export class SectionCollaborateComponent {
    onDiscordButtonFullFlow() {
        const confirmed = window.confirm("You are about to leave this site and open Discord in a new tab. Continue?");
        if (confirmed) {
            window.open("https://discord.com/users/nebelorz", "_blank");
        }
    }
}
