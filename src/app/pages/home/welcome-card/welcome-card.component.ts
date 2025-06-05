import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { ModalSubmitInfoComponent } from "../../../shared/components/modal-submit-info/modal-submit-info.component";

@Component({
    selector: "app-welcome-card",
    standalone: true,
    imports: [RouterLink, ModalSubmitInfoComponent],
    templateUrl: "./welcome-card.component.html",
})
export class WelcomeCardComponent {}
