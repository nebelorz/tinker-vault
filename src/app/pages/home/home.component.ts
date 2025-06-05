import { Component } from "@angular/core";

import { NpcsCardComponent } from "./npcs-card/npcs-card.component";
import { TopContributorsComponent } from "./top-contributors/top-contributors.component";
import { WelcomeCardComponent } from "./welcome-card/welcome-card.component";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [WelcomeCardComponent, TopContributorsComponent, NpcsCardComponent],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent {}
