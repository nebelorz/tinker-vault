import { Component, Input } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";
import { RouterLink } from "@angular/router";

import { NpcTrades } from "../../../../interfaces/npc.interface";

@Component({
    selector: "app-section-trade",
    standalone: true,
    imports: [NgIf, NgFor, RouterLink],
    templateUrl: "./section-trade.component.html",
})
export class SectionTradeComponent {
    @Input() trades!: NpcTrades;
}
