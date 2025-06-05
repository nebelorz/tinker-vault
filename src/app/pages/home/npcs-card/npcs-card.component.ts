import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-npcs-card",
    standalone: true,
    imports: [RouterLink],
    templateUrl: "./npcs-card.component.html",
    styleUrls: ["./npcs-card.component.css"],
})
export class NpcsCardComponent {}
