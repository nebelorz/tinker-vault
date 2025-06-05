import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LucideAngularModule, MailIcon } from "lucide-angular";

@Component({
    selector: "app-modal-submit-info",
    standalone: true,
    templateUrl: "./modal-submit-info.component.html",
    imports: [FormsModule, LucideAngularModule],
})
export class ModalSubmitInfoComponent {
    @ViewChild("dialog") dialog!: ElementRef<HTMLDialogElement>;

    title = "";
    description = "";

    readonly iconMail = MailIcon;

    open() {
        this.dialog.nativeElement.showModal();
    }

    sendEmail(event: Event) {
        event.preventDefault();
        if (!this.title || !this.description) return;

        const subject = encodeURIComponent(this.title);
        const body = encodeURIComponent(this.description);
        const mailto = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
        window.location.href = mailto;

        this.close();
    }

    async onDiscordButtonFullFlow() {
        await this.formToDiscordFormat();
        const confirmed = window.confirm("You are about to leave this site and open Discord in a new tab. Continue?");
        if (confirmed) {
            window.open("https://discord.com/users/nebelorz", "_blank");
        }
    }

    private formToDiscordFormat() {
        if (!this.title || !this.description) return;

        const formatted = `**${this.title}**\n\`\`\`\n${this.description}\n\`\`\``;

        return navigator.clipboard.writeText(formatted).then(() => {
            alert("Copied info to clipboard!");
        });
    }

    close() {
        this.dialog.nativeElement.close();
    }
}
